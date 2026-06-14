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
  - Added `CLAUDE.md` at the project root (reference model, pointing at
    the vendored `docs/solid-ai-templates/` submodule)
  - Added `docs/ONBOARDING.md`, `docs/PLAYBOOK.md`, and this journal
- Decisions:
  - Chose the reference composition model (templates are vendored as a
    submodule) over inline
  - Based conventions on the TypeScript foundation (base/core +
    base/language/typescript), tailored for a runnable-examples tutorial
    rather than the npm-library stack
  - Recorded two deliberate overrides in CLAUDE.md: `console.log` is
    allowed in `examples/**` as teaching output, and no test-coverage
    gate applies (testing is illustrative via `node:test`)
- Open gaps:
  - No `README.md` at the repo root - required by `base/core/git.md`;
    not created this session (out of agreed scope)

<!-- Generated with solid-ai-templates (github.com/braboj/solid-ai-templates) -->
