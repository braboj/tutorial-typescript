# TypeScript by Example

_Learn TypeScript by reading, running, and changing small files._

Most TypeScript resources explain syntax in prose, leaving you to guess
how a feature behaves at runtime. This repo takes the opposite approach:
every concept is a self-contained `.ts` file you run directly and watch
produce output. Inspired by
[Dart by Example](https://www.jpryan.me/dartbyexample/), it teaches the
language, software design, and the library ecosystem one runnable lesson
at a time.

- Learn language fundamentals through small, runnable example files
- Study software design: OOP, SOLID, design patterns, secure design,
  typed patterns
- Practice the standard library and common npm packages (`zod`,
  `dotenv`, `dayjs`, `express`)
- Run any example directly with `tsx` - no build step
- Type-check the whole project with a single command

## Quick start

Prerequisites: Node.js 20+ (LTS) and npm. Running the examples needs nothing
else - no submodule and no build step.

```bash
git clone https://github.com/braboj/tutorial-typescript.git
cd tutorial-typescript
npm install
npm run ex examples/01_language/01_introduction/01_hello_world.ts
```

Expected output:

```
Hello, TypeScript!
```

## Usage

Run any example directly (no build step):

```bash
npm run ex examples/03_libraries/10_testing/01_node_test.ts
# prints a TAP report; the summary shows # pass N and # fail 0
```

Type-check the whole project without running anything:

```bash
npm run typecheck
# completes with no output and exit code 0 when there are no type errors
```

Re-run an example on every save while you experiment:

```bash
npm run ex:watch examples/01_language/10_generics/01_generic_functions.ts
```

## Project structure

```
examples/              # runnable lessons grouped by topic (start here)
  01_language/         # language fundamentals (types, classes, async, ...)
  02_design/           # OOP, SOLID, patterns, secure & typed design
  03_libraries/        # standard library + npm packages (zod, express, ...)
docs/                  # contributor and agent documentation
  solid-ai-templates/  # vendored conventions (git submodule)
  decisions/           # architecture decision records (ADRs)
  ONBOARDING.md        # setup guide
  PLAYBOOK.md          # operational reference
  SPEC.md              # system design and MVP plan
  dev-journal.md       # session log
package.json           # scripts and dependencies
tsconfig.json          # strict TypeScript config
prettier.config.js     # formatter config
CLAUDE.md              # agent context and project rules
README.md              # this file
```

Each top-level chapter is `NN_topic/`; each lesson inside is `NN_topic.ts`,
and every chapter carries a `lab.ts` scratch file with `// Expected:`
tasks to implement yourself.

## Development setup

Running the lessons needs only the [Quick start](#quick-start) above.
Contributors who also want the vendored quality conventions (used by the
agent workflow and code review) fetch the `docs/solid-ai-templates/`
submodule - it holds conventions, not example code, so the lessons run
without it:

```bash
git submodule update --init --recursive
```

Common tasks:

```bash
npm run typecheck      # tsc --noEmit (no errors expected)
npm run examples:check # run every lesson; fails if any throws
npm test               # run the node:test example lesson
npm run format         # prettier --write .
npm run format:check   # prettier --check . (quality gate)
```

No database, broker, or other external service is required - every
example runs on Node.js alone. GitHub Actions runs `typecheck`,
`format:check`, and `examples:check` on every push and pull request. New
contributors should read [docs/ONBOARDING.md](docs/ONBOARDING.md) next.

## Configuration reference

The project itself reads no environment variables. The only configuration
appears in the `dotenv` lesson
([examples/03_libraries/12_dotenv/](examples/03_libraries/12_dotenv/)),
which loads these keys from its local `config.env` for teaching purposes:

| Key              | Type    | Default | Description             |
| ---------------- | ------- | ------- | ----------------------- |
| `APP_NAME`       | string  | `app`   | Sample application name |
| `PORT`           | number  | `3000`  | Sample server port      |
| `FEATURE_NEW_UI` | boolean | `false` | Sample feature flag     |

Real secrets MUST NOT be committed - `.env` files are gitignored.

## Links

- [Contributor onboarding](docs/ONBOARDING.md)
- [Operational playbook](docs/PLAYBOOK.md)
- [Development journal](docs/dev-journal.md)
- [Agent context and project rules](CLAUDE.md)
- Inspiration:
  [Dart by Example](https://www.jpryan.me/dartbyexample/)

## License

This project is licensed under the Creative Commons
Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)
license - see [LICENSE.md](LICENSE.md) for details.
