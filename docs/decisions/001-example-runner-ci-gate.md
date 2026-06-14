# ADR-001: Example runner and CI "examples work" gate

**Status:** Accepted
**Date:** 2026-06-14

## Context

The project rule in `CLAUDE.md` states that every example MUST run via `tsx`
without throwing. Only `typecheck` and `format:check` are enforced, though -
both prove that files compile, not that they run. Across roughly 131 lesson
files, runtime correctness is unverified: an example can type-check cleanly
and still throw at runtime (a bad path, a missing `.env`, an unresolved
worker). "Examples work" is the heart of the MVP (see
[SPEC.md](../SPEC.md)), so it needs enforcement rather than hope.

## Decision

Build a `tools/` runner that scans `examples/` and executes every terminating
lesson file. A throw fails the run, and the runner is wired into CI as a
required gate alongside `typecheck` and `format:check`. Examples that do not
terminate or need setup (servers, input, environment) are handled by a run
contract resolved in spike SP-B and excluded from or specially driven by the
runner, with their intentional behavior documented.

```
examples/ --scan--> tools/ runner --> per-file: pass | throw | skipped(contract)
                                          |
                                          +--> CI gate: any throw fails the build
```

## Alternatives considered

- **Manual one-time audit.** Run everything by hand once and fix breakage.
  Rejected as the standing mechanism: it rots the moment a lesson changes.
- **Rely on `typecheck` only.** Rejected: compilation does not catch runtime
  failures.
- **A unit test per example.** Rejected: heavier than needed, and testing the
  example APIs - not gating example execution - is the tutorial's testing goal.

## Consequences

- New examples are covered automatically because the runner scans the tree.
- CI runs longer; the runner must stay reasonably fast.
- Non-terminating examples need an explicit, documented policy (timeout and
  readiness check, or exclude-and-document) - decided in SP-B.
- The same scan feeds the index page data (see
  [ADR-002](002-generated-static-index.md)), so the runner and the page share
  one source of truth.
