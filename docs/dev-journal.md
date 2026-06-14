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
    (version reset to 0.0.0 baseline, license set to a LICENSE.md
    pointer) and the README license section
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

### Session 3 - Example runner and CI gate

- Date: 2026-06-14
- Tool: Claude Code (Opus 4.8)
- Key changes:
  - SP-A execution audit (#7): all 131 lesson files run clean via tsx
    (exit 0, self-terminating, no setup/input/network deps); closed #7
    and #10 (no throwers to fix)
  - Added `tools/run-examples.ts`: runs every lesson (lab.ts excluded)
    with a per-file timeout, fails on any throw or hang
  - Added the `examples:check` npm script and `.github/workflows/ci.yml`
    (typecheck + format:check + examples:check on push and PR)
  - Documented the gate in README, PLAYBOOK (3.4), and CLAUDE.md
- Decisions:
  - Runner runs lessons serially with a 20s per-file timeout; the EXCLUDE
    list is empty because SP-A found no non-terminating lessons (ADR-001)
- Verification: `npm run typecheck`, `npm run format:check`, and
  `npm run examples:check` (131/131) all pass
- Next: tag v0.1.0, then v0.2.0 (#11 debug matrix)

### Session 4 - Ship v0.1.0 and v0.2.0

- Date: 2026-06-14
- Tool: Claude Code (Opus 4.8)
- Key changes:
  - Released v0.1.0 (Examples work): merged the runner + CI gate (#9),
    bumped the manifest 0.0.0 -> 0.1.0, tagged v0.1.0, closed the milestone
  - SP-C debug matrix (#11): verified tsx source maps resolve to the exact
    .ts line/column (proxy for breakpoints) and that launch.json is correct;
    the one worker example uses an inline eval worker, so no config change
  - Made a no-submodule clone the default learner path (#12, #13): plain
    git clone in README/ONBOARDING, submodule reframed as contributor-only,
    tsconfig excludes docs/ so typecheck never depends on the submodule
  - Released v0.2.0 (Local dev loop): manifest 0.1.0 -> 0.2.0, tagged
    v0.2.0, closed the milestone
- Decisions:
  - Releases bump the package.json version to match the tag via a release
    PR; PLAYBOOK section 5 updated to that runbook (manifest tracks the tag)
- Verification: each release PR passed CI (typecheck + format:check +
  examples:check); manifest matches tag for both releases
- Next: v0.3.0 (index page) - SP-E (#14), generator (#15), port prototype
  (#16), Pages deploy (#17)

<!-- Generated with solid-ai-templates (github.com/braboj/solid-ai-templates) -->
