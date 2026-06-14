# ADR-002: Generated static index page

**Status:** Accepted
**Date:** 2026-06-14

## Context

The MVP needs a single index page that lets a learner browse every example and
copy its run command (see [SPEC.md](../SPEC.md)). A prototype exists
(`docs/prototype/`), but it hardcodes the chapter and file structure in a
`SECTIONS` array - and that array is already stale (it omits several `lab.ts`
files and newer lessons such as `07_satisfies` and `08_branded_types`). A
hand-maintained list drifts from `examples/` the moment a lesson is added,
which contradicts the project rule to compute derived data from its source.

## Decision

Generate the page from a `tools/` scan of `examples/`. The example structure
(chapters, topics, files, counts) is scanned from disk; the curated prose lives
in a separate authored metadata source. The generator emits static HTML plus a
stylesheet - no frontend framework and no build step - and exposes a `--check`
mode wired to CI that fails when the committed page is stale. The prototype
serves as the visual specification, not the data.

```
examples/ + authored prose --scan/render--> index.html + index.css
                                                 |
                                            --check gate in CI
```

## Alternatives considered

- **Hand-authored static HTML.** Rejected: drifts from `examples/` (the
  prototype already proves this).
- **React plus a Vite build.** Reuses the prototype directly but adds
  `react`/`react-dom`/`vite` and a second build system to a repo whose
  identity is "no build step." Rejected for the MVP; revisit only if the page
  needs rich interactivity.
- **A static site generator (Astro, Eleventy).** Rejected as heavier than a
  read-only page warrants.

## Consequences

- The page cannot drift: its structure is read from disk on every generation.
- The whole site is one generated artifact guarded by a `--check` staleness
  gate, following the generated-files convention in `docs.md`.
- Porting the prototype's inline-styled JSX to an HTML template plus CSS is
  mechanical.
- Copy-to-clipboard needs a small amount of vanilla JavaScript; no framework.
- Prettier ignores the generated output so it does not reformat it at commit
  time and trip the `--check` gate.
