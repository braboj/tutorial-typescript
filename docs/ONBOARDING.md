# Onboarding

Setup guide for new contributors to **TypeScript by Example**, a tutorial of
self-contained, runnable TypeScript examples. For daily commands and
workflows, see [PLAYBOOK.md](PLAYBOOK.md).

## 1. Prerequisites

- Node.js 20+ (LTS) - check with `node --version`
- npm 10+ (ships with Node) - check with `npm --version`
- git 2.13+ - check with `git --version` (submodule support is only needed
  for the optional conventions submodule below)
- A TypeScript-aware editor (VS Code recommended) is optional

## 2. First-time setup

Clone and install - this is all you need to run and edit the lessons:

```bash
git clone https://github.com/braboj/tutorial-typescript.git
cd tutorial-typescript
npm install
```

The `docs/solid-ai-templates/` submodule (vendored quality conventions) is
optional and only used by contributors for the agent workflow and reviews;
the lessons run without it. To fetch it:

```bash
git submodule update --init --recursive
```

## 3. Verify the setup

Run each command and confirm the expected outcome:

```bash
npm run typecheck
# Expected: completes with no output and exit code 0 (no type errors)

npm run format:check
# Expected: "All matched files use Prettier code style!"

npm run ex examples/01_language/01_introduction/01_hello_world.ts
# Expected: the hello-world lesson runs and prints its output

npm test
# Expected: node:test runs the testing lesson and reports passing tests
```

If all four succeed, the environment is ready.

## 4. Key files

| File                                    | Why read it first                                  |
| --------------------------------------- | -------------------------------------------------- |
| `CLAUDE.md`                             | Project rules and conventions (binding for agents) |
| `package.json`                          | Available scripts and dependencies                 |
| `tsconfig.json`                         | Strict TypeScript settings used everywhere         |
| `examples/01_language/01_introduction/` | Entry point for the tutorial                       |
| `docs/PLAYBOOK.md`                      | How to add a lesson, run quality checks, release   |
| `docs/solid-ai-templates/`              | Inherited quality and review conventions           |

## 5. Project context

TypeScript by Example teaches TypeScript through many small, independently
runnable
example files grouped into three chapters: `01_language` (fundamentals),
`02_design` (OOP, SOLID, patterns), and `03_libraries` (standard and
third-party libraries). Each example is run directly with `tsx` - there
is no build step and nothing is published. Conventions are inherited from
the vendored `docs/solid-ai-templates/` submodule; project-specific
overrides live in `CLAUDE.md`.

## 6. Daily workflow

See [PLAYBOOK.md](PLAYBOOK.md) for the full workflow:

- Git workflow - PLAYBOOK section 1
- Adding or editing a lesson - PLAYBOOK section 2
- Quality checks - PLAYBOOK section 3
- Maintenance - PLAYBOOK section 4

<!-- Generated with solid-ai-templates (github.com/braboj/solid-ai-templates) -->
