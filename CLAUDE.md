# TypeScript by Example

A hands-on tutorial of self-contained, runnable
examples covering the language, software design, and the standard plus
third-party library ecosystem.

- Owner: Branimir Georgiev (braboj)
- Repo: github.com/braboj/tutorial-typescript
- Model: reference

## Startup - read before you respond

Quality conventions live in the `docs/solid-ai-templates/` submodule.
You MUST read every file listed below IN FULL using the Read tool before
you respond. They contain binding conventions this file inherits. If you
respond without reading them, you are violating project rules.

- `docs/solid-ai-templates/templates/base/workflow/scope.md` - session protocol, scope guard
- `docs/solid-ai-templates/templates/base/core/git.md` - git conventions
- `docs/solid-ai-templates/templates/base/core/quality.md` - quality attributes
- `docs/solid-ai-templates/templates/base/language/typescript.md` - TypeScript rules
- `docs/solid-ai-templates/templates/base/core/testing.md` - testing taxonomy
- `docs/solid-ai-templates/templates/base/core/review.md` - review priority order
- `docs/solid-ai-templates/templates/base/core/docs.md` - documentation standards
- `docs/solid-ai-templates/templates/base/core/readme.md` - README structure

Project-specific overrides and additions follow below. Where a
project-specific rule conflicts with a referenced template, the
project-specific rule wins.

## 1. Project

### 1.1 Overview

- Name: TypeScript by Example
- Package name: `tutorial-typescript` (the `name` field in package.json)
- Purpose: teach TypeScript through small, runnable example files
- Language: TypeScript (strict mode)
- Runtime: Node.js 20+ (LTS), executed directly via `tsx` - no build step
- Type checker: `tsc --noEmit`
- Formatter: Prettier
- Test runner: `node:test` + `node:assert` (Node built-in)
- Distribution: none - this is a learning repo, not a published package
- Model: reference

### 1.2 Project structure

```
examples/                # runnable lessons, grouped by topic (source of truth)
  01_language/           # language fundamentals (types, classes, async, ...)
  02_design/             # OOP, SOLID, design patterns, secure design
  03_libraries/          # standard + third-party libs (zod, express, dayjs, ...)
docs/
  solid-ai-templates/    # vendored conventions submodule (read-only upstream)
  ONBOARDING.md          # contributor setup guide
  PLAYBOOK.md            # operational reference
  dev-journal.md         # session log
package.json             # scripts and dependencies
tsconfig.json            # strict TypeScript config
prettier.config.js       # formatter config
CLAUDE.md                # this file
```

- Each top-level chapter is `NN_topic/`; each lesson inside is `NN_topic.ts`
- Every chapter has a `lab.ts` scratch file for free experimentation
- `docs/solid-ai-templates/` is a git submodule - never hand-edit it; update
  it with `git submodule update --remote`

### 1.3 Commands

```bash
npm run ex <file>          # run one example via tsx
npm run ex:watch <file>    # run one example in watch mode
npm run typecheck          # tsc --noEmit (no errors expected)
npm run typecheck:watch    # type check in watch mode
npm run format             # prettier --write .
npm run format:check       # prettier --check . (CI/quality gate)
npm test                   # run the node:test example lesson
```

## 2. Code conventions

Base TypeScript rules apply (see `base/language/typescript.md`): `strict:
true`, no `any` (use `unknown` and narrow), `interface` for object shapes,
`type` for unions, `import type` for type-only imports, no enums (use
`as const` or string literal unions). The rules below are this project's
additions and deliberate overrides.

### 2.1 Example design

- Every example file MUST be self-contained and runnable on its own via
  `npm run ex <file>` - no cross-file imports between lessons
- One concept per file - a lesson teaches a single idea end to end
- Prefer clarity over cleverness: teaching code optimizes for the reader
  learning the concept, not for terseness
- Keep dependencies between examples at zero; shared helpers are a smell
  in a tutorial - duplicate the small setup instead

### 2.2 Output and console use (override)

- `console.log` is the primary teaching output mechanism and IS allowed
  in `examples/**` - this OVERRIDES the "no console.log" debug-code rule
  in `base/core/quality.md`, which still applies to tooling and docs code
- Show the result of each example: print the values a lesson produces so
  the learner can run it and see the expected output

### 2.3 Dependencies

- Third-party packages (`dayjs`, `dotenv`, `express`, `zod`) are lesson
  SUBJECTS, not app infrastructure - each exists to be demonstrated
- Add a new dependency only when a new lesson needs to teach it; record
  the reason in the dev journal
- Commit `package-lock.json`; never commit `node_modules/` or `.env`

### 2.4 Naming

- Files: `NN_topic.ts` (zero-padded order prefix + snake_case topic)
- Within code, follow base naming rules: verbs for functions, nouns for
  types, `is`/`has`/`can` for booleans

## 3. Quality

This repo has no build artifact and no coverage gate - the quality gates
are type safety and formatting.

### 3.1 Gates

- `npm run typecheck` MUST pass with zero errors before every commit
- `npm run format:check` MUST pass before every commit
- Every example MUST actually run via `tsx` without throwing

### 3.2 Testing (override)

- Testing in this repo is illustrative: lessons under
  `examples/03_libraries/10_testing/` demonstrate `node:test` +
  `node:assert`, the Node built-in runner
- Do NOT introduce Vitest, Jest, or coverage thresholds - the 90%/80%
  coverage policy in `base/core/testing.md` does NOT apply to this
  tutorial; teaching the testing APIs is the goal, not gating coverage

## 4. Identity

Not applicable - this project has no design system or brand voice.

## 5. Review process

### 5.1 Code review

Follow the `base/core/review.md` priority order: security exposure ->
functional correctness -> clarity -> convention compliance. Use
`base/core/quality.md` and `base/language/typescript.md` as the standard
for clarity and conventions. For this repo, also verify:

- The example runs via `tsx` and prints the output the lesson describes
- The lesson teaches one concept and stays self-contained

### 5.2 Structure audit

Run after new-project setup, adding a chapter, or before a milestone.
Verify every MUST from `base/core/docs.md`, `base/core/readme.md`,
`base/core/git.md`, and that each chapter's lessons type-check and run.

## 6. Session protocol

Follow `base/workflow/scope.md` for the scope guard and end-of-session
audit. Summary below; the template is authoritative.

### 6.1 Start of session

- Read every file in the Startup block above IN FULL first
- Check the current branch (ask if not `main`) and `git status`
- Confirm the scope with the user before changing anything

### 6.2 During the session

- One logical unit per session (one chapter, one lesson, one fix)
- Flag scope growth explicitly instead of silently absorbing it
- Type-check and format after each change - do not accumulate unverified work

### 6.3 End of session

When the user signals end of session, print and execute the full
end-of-session audit checklist from `base/workflow/scope.md`
sequentially - commits, dev-journal entry, doc updates (CLAUDE.md,
README, ONBOARDING, PLAYBOOK), submodule check, gap flags, summary.

<!-- Generated with solid-ai-templates (github.com/braboj/solid-ai-templates) -->
