# Development Journal

Development history and session log for **TypeScript by Example**. Newest entries at
the bottom. Each entry records date, tool, key changes, and decisions.
See [ONBOARDING.md](ONBOARDING.md) and [PLAYBOOK.md](PLAYBOOK.md) for
setup and workflows.

## Architecture overview

- TypeScript by Example is a tutorial of self-contained, runnable
  TypeScript example files, grouped into three chapters under `examples/`:
  `01_language`, `02_design`, `03_libraries`
- Examples run directly via `tsx`; there is no build step and nothing is
  published
- Quality conventions are inherited from the `docs/solid-ai-templates/`
  submodule; project-specific overrides live in `CLAUDE.md`

## Sessions

### Session 1 - Generate agent context from templates

- Date: 2026-06-14
- Tool: Claude Code (Opus 4.8)
- Key changes:
  - Ran the solid-ai-templates interview against the repo
  - Added `CLAUDE.md` (reference model, pointing at the vendored
    `docs/solid-ai-templates/` submodule)
  - Added `README.md` (root, 8-section structure) and removed the
    redundant `examples/README.md`
  - Added `docs/ONBOARDING.md`, `docs/PLAYBOOK.md`, and this journal
  - Renamed the npm package from `ts-sprint` to `tutorial-typescript`
    (matches the repo and GitHub remote)
  - Excluded `docs/solid-ai-templates/` from Prettier and formatted the
    remaining non-conforming files (format:check now passes repo-wide)
  - Aligned the dotenv lesson sample `APP_NAME` with the new package name
  - Added `.gitattributes` (`* text=auto eol=lf`) to enforce LF endings
  - Merged the above via PR #1 (squash) to `main`
- Decisions:
  - Chose the reference composition model (templates are vendored as a
    submodule) over inline
  - Based conventions on the TypeScript foundation (base/core +
    base/language/typescript), tailored for a runnable-examples tutorial
    rather than the npm-library stack
  - Recorded two deliberate overrides in CLAUDE.md: `console.log` is
    allowed in `examples/**` as teaching output, and no test-coverage
    gate applies (testing is illustrative via `node:test`)
  - Project display name is "TypeScript by Example"; npm package name is
    `tutorial-typescript`
- Verification: `npm run typecheck`, `npm run format:check`, and
  `npm test` (4 pass / 0 fail) all green before merge

### Session 2 - Plan and formalize the MVP

- Date: 2026-06-14
- Tool: Claude Code (Opus 4.8)
- Key changes:
  - Ran explore -> agree for the MVP; the core loop is clone -> run ->
    debug -> experiment, with a generated index page; Playground deferred
  - Added `docs/SPEC.md` (MVP definition, one-scanner-two-outputs
    architecture, FR/NFR tables, v0.1.0 -> v1.0.0 release roadmap)
  - Added five ADRs in `docs/decisions/` (001-005): example runner + CI
    gate, generated static index, GitHub Pages hosting, page visual
    identity, licensing
  - Added `LICENSE.md` (CC BY-NC-SA 4.0); reconciled `package.json`
    (version 1.0.0 -> 0.0.0 baseline, license -> `SEE LICENSE IN
LICENSE.md`) and the README license section
  - Excluded `docs/prototype/` from Prettier and tracked the index-page
    prototype as the visual spec
  - Opened PR #5; created epic #6, milestones v0.1.0-v1.0.0, issues
    #7-#19, and the epic/task/spike + P0-P3 labels
- Decisions (see ADRs):
  - Index data is generated from `examples/`, never hand-maintained
    (ADR-002)
  - Page is framework-free static HTML hosted on GitHub Pages
    (ADR-002, ADR-003)
  - Align to the TypeScript palette with an unaffiliated disclaimer; no
    official logo (ADR-004)
  - License the repo as content under CC BY-NC-SA 4.0, matching
    tutorial-git (ADR-005)
- Verification: `npm run typecheck` and `npm run format:check` both pass
- Next: SP-A execution audit (#7), the v0.1.0 keystone

<!-- Generated with solid-ai-templates (github.com/braboj/solid-ai-templates) -->
