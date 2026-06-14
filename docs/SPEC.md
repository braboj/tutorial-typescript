# TypeScript by Example - System Design

This document is the design reference for the project: what the MVP is, how
the system is structured, and the requirements and release plan it follows.
It complements the other standard documents - see [README.md](../README.md)
for project structure and setup, [PLAYBOOK.md](PLAYBOOK.md) for operational
tasks, and [decisions/](decisions/) for the architecture decision records
that individual choices are recorded in.

## 1. Vision and MVP

TypeScript by Example teaches TypeScript through small, self-contained,
runnable files. The first milestone (`v1.0.0`) is an MVP a single maintainer
can test end to end.

MVP definition:

> A learner clones the repository, opens a generated index page to browse
> every example and copy its run command, then runs, debugs, and experiments
> with the examples locally - and every terminating example is proven to work
> in CI.

The core loop is **clone -> run -> debug -> experiment**. In scope: the
examples work reliably, and a generated index page supports navigation and
run commands. Out of scope for the MVP: TypeScript Playground deep-linking
(see section 8).

## 2. Users and journeys

The product serves one primary user - a learner working locally:

1. **Clone** - clone the repository and install dependencies. The learner
   does not need the conventions submodule (that is a contributor concern).
2. **Run** - run any example with `npm run ex <file>` and see its output.
3. **Debug** - press F5 on any example for a debug session with working
   breakpoints and source maps.
4. **Experiment** - edit the chapter's `lab.ts` scratch file, optionally in
   watch mode.

A generated index page is the entry point: it lists every example grouped by
chapter and topic, links each file to its source, and exposes a copy-able run
command.

## 3. Architecture - one scanner, two outputs

`examples/` on disk is the single source of truth. A `tools/` generator scans
it once and produces two outputs from the same scan - the CI gate that proves
the examples run, and the data that drives the index page. Nothing about the
example set is hand-maintained, so the page and the gate cannot drift from the
files.

```
                          +-- audit: pass / throw / long-running --> CI "examples work" gate
examples/ --scan--> tools/ generator --|
                          +-- data: chapters/topics/files + authored prose --> index.html
```

- The example structure (chapters, topics, file lists, counts) is scanned
  from disk.
- The curated prose (chapter and topic descriptions) is authored in a small
  metadata source, kept separate from the scanned structure.
- The page is generated static HTML plus a stylesheet - no framework and no
  build step (see [ADR-002](decisions/002-generated-static-index.md)).
- The generator exposes a `--check` mode wired to CI so a stale committed page
  fails the build.

## 4. Functional requirements

Requirement levels follow RFC 2119 (MUST, SHOULD, MAY).

| ID    | Requirement                                                                                                                                                     | Level             |
| ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| FR-1  | Every lesson file runs via `npm run ex <file>` and either exits cleanly or shows documented intentional behavior (e.g. a server that listens until interrupted) | MUST              |
| FR-2  | Each example prints output demonstrating its concept                                                                                                            | MUST              |
| FR-3  | Any example needing setup (env, files, ports) documents it and ships a sample (e.g. `.env.example`)                                                             | MUST              |
| FR-4  | Pressing F5 on any lesson starts a working debug session (breakpoints and source maps)                                                                          | MUST              |
| FR-5  | Each lesson keeps a usable `lab.ts` scratch file                                                                                                                | MUST              |
| FR-6  | A learner can clone and run without the conventions submodule                                                                                                   | MUST              |
| FR-7  | An automated runner executes every terminating example in CI; a throw fails the build                                                                           | MUST              |
| FR-8  | A generated static index lists every example (structure scanned, never hand-maintained), grouped by chapter and topic                                           | MUST              |
| FR-9  | Each example on the page links to its source and exposes a copy-able run command                                                                                | MUST              |
| FR-10 | The generator has a `--check` mode wired to CI to catch staleness                                                                                               | MUST              |
| FR-11 | The page supports keyword and chapter filtering                                                                                                                 | SHOULD (post-MVP) |
| FR-12 | The page offers "Open in Playground" for browser-safe lessons                                                                                                   | MAY (post-MVP)    |

## 5. Non-functional requirements

- Node.js 20+; examples run directly via `tsx` with no build step.
- The site is static only - no backend - and is a generated artifact.
- No frontend framework dependency.
- Source files are ASCII with LF line endings; TypeScript runs in strict mode.
- Examples stay self-contained - no cross-imports between lessons.
- The page is semantic and keyboard-navigable.

## 6. Release roadmap

Milestones ship as SemVer tags; the final MVP is `v1.0.0`. Each tag is an
independently shippable increment with a release gate that MUST pass before it
ships. The release ritual follows the release process in
[PLAYBOOK.md](PLAYBOOK.md) (section 5) - bump the manifest, then tag.

| Tag        | Theme           | Delivers                                                                                                                                                                                                                                                | Release gate                                                             |
| ---------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| **v0.1.0** | Examples work   | `tools/` runner, run contracts, fix any throwers, CI gate ([ADR-001](decisions/001-example-runner-ci-gate.md))                                                                                                                                          | typecheck, format, and the runner all green in CI                        |
| **v0.2.0** | Local dev loop  | debug matrix verified, `lab.ts` usable, submodule-optional clone, learner/contributor README split                                                                                                                                                      | F5 works across plain/async/class/worker; a clone without submodule runs |
| **v0.3.0** | Index page live | scanner emits page data, prototype ported to static HTML and CSS, `--check` gate, GitHub Pages ([ADR-002](decisions/002-generated-static-index.md), [ADR-003](decisions/003-github-pages-hosting.md), [ADR-004](decisions/004-page-visual-identity.md)) | page generated from `examples/`, `--check` green, live URL resolves      |
| **v1.0.0** | MVP             | polish, accessibility, documentation complete, full verification and sign-off                                                                                                                                                                           | every MVP requirement met and tested; release notes written              |

The version manifest starts at `0.0.0` (nothing released yet); the `v0.1.0`
release pull request bumps it to `0.1.0` and tags the release. Post-MVP work
(FR-11 filtering, FR-12 Playground) lands as `v1.1.0` and later.

## 7. Spikes

These resolve during early delivery; their output is a decision, recorded
where it lands (an ADR, this document, or an issue).

- **SP-A - Execution audit** (keystone): run every lesson file and classify
  it as clean-exit, long-running, needs-setup, needs-input, or throws. The
  output is the real state of "examples work" and the fix list for `v0.1.0`.
- **SP-B - Run contract** for long-running, setup, and input examples,
  informed by SP-A (including how CI runs server examples).
- **SP-C - Debug matrix** across plain, async, class, and `worker_threads`
  examples (workers are the usual source-map failure point).
- **SP-E - Authored-descriptions shape**: where the curated prose lives and
  its format.

## 8. Out of scope (deferred)

- **TypeScript Playground deep-linking.** Many examples use Node-only APIs
  (`node:*`, `express`, `dotenv`) that cannot run in the browser Playground,
  and the MVP workflow is local. Revisit after the local loop is solid.
- **Page filtering and search** (FR-11) and **per-example Playground links**
  (FR-12) are post-MVP.
