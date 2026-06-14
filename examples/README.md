# TypeScript by Example

A hands-on tutorial inspired by [Dart by Example](https://www.jpryan.me/dartbyexample/).
Every example is a **self-contained, runnable `.ts` file**. Read it, run it, change it.

## How to run

Each file runs directly with [`tsx`](https://github.com/privatenumber/tsx) (no build step):

```bash
npx tsx examples/01_language/01_introduction/01_hello_world.ts
# or, via the npm script:
npm run ex examples/01_language/01_introduction/01_hello_world.ts
```

Type-check everything without running:

```bash
npm run typecheck
```

Expected console output is folded into the descriptive comment **above** the code
that produces it, written as `// ... -> result`. Multi-line output (e.g. tables)
is described in prose instead of inlined. Chapters also carry a `lab.ts` with
`// Expected:` tasks for you to implement yourself.

## Contents

### 01 - Language

| #   | Topic                  | What you learn                                                                                               |
| --- | ---------------------- | ------------------------------------------------------------------------------------------------------------ |
| 01  | Introduction           | Hello world, why types, running TS, console output, statements vs expressions, modules teaser, TS philosophy |
| 02  | Variables              | `let`/`const`, primitives, arrays, tuples, objects, inference                                                |
| 03  | Comments               | Line/block comments and TSDoc                                                                                |
| 04  | Operators              | Arithmetic, comparison, logical, nullish, optional chaining, bitwise                                         |
| 05  | Types & Interfaces     | Aliases, interfaces, unions, literals, enums, narrowing, assertions                                          |
| 06  | Strings                | Template literals, methods, template-literal types                                                           |
| 07  | Control Flow           | `if`/`switch`/loops/`for..of`, exhaustiveness                                                                |
| 08  | Functions              | Params, arrows, overloads, `this`, higher-order                                                              |
| 09  | Classes                | Access modifiers, inheritance, abstract, accessors, statics                                                  |
| 10  | Generics               | Generic functions/classes, constraints, utility types                                                        |
| 11  | Modules                | Named/default exports, re-exports (ESM)                                                                      |
| 12  | Async & Promises       | Promises, `async`/`await`, combinators, error handling                                                       |
| 13  | Error Handling         | `try/catch/finally`, custom `Error` subclasses, `cause`, Result pattern                                      |
| 14  | Iterators & Generators | `Symbol.iterator`, `function*`, `yield`/`yield*`, lazy/infinite sequences                                    |
| 15  | Decorators             | Standardized TS 5 decorators for methods, classes, fields, accessors                                         |
| 16  | Resource Management    | `using`/`await using` + `Symbol.dispose` for deterministic cleanup                                           |
| 17  | Advanced Types         | `keyof`/indexed access, conditional types, `infer`, mapped types, variance, type predicates & assertion functions, `satisfies`, branded types |

### 02 - Design

| #   | Topic            | What you learn                                                                          |
| --- | ---------------- | --------------------------------------------------------------------------------------- |
| 01  | OOP Basics       | Encapsulation, abstraction, inheritance, polymorphism, composition over inheritance     |
| 02  | SOLID Principles | One file per principle: SRP, OCP, LSP, ISP, DIP                                         |
| 03  | Design Patterns  | Singleton, Factory, Builder, Adapter, Decorator, Strategy, Observer, Command            |
| 04  | Secure Design    | Input validation, injection/escaping, safe defaults & least privilege, secrets & errors, secure configuration, security logging |
| 05  | Typed Patterns   | Type-state, type-safe builder, generic repository, discriminated-union state machines, typed pipelines |

### 03 - Libraries

The standard-library modules and npm packages a TypeScript developer reaches for
daily. Topics 01-10 and 15-16 use only Node built-ins (zero install); topics
11-14 use the ubiquitous npm packages already listed in `package.json` (run
`npm install` once).

| #   | Topic               | Module / package                | What you learn                                                |
| --- | ------------------- | ------------------------------- | ------------------------------------------------------------- |
| 01  | Logging             | (built-in)                      | Leveled, structured (JSON) logging                            |
| 02  | Concurrency         | (built-in)                      | Promise-based worker pool, bounded parallelism                |
| 03  | Serialization       | (built-in)                      | `JSON.stringify`/`parse`, revivers, gotchas                   |
| 04  | Data Structures     | (built-in)                      | `Map`, `Set`, de-duplication                                  |
| 05  | File System         | `node:fs/promises`, `node:path` | Async file I/O, building OS-safe paths                        |
| 06  | Crypto              | `node:crypto`                   | UUIDs, secure random, hashing, password storage               |
| 07  | Events              | `node:events`                   | `EventEmitter` with a typed wrapper                           |
| 08  | Streams             | `node:stream`                   | Readable/Writable/Transform + `pipeline`                      |
| 09  | HTTP                | `node:http`, `fetch`            | Build a server; consume APIs with `fetch`                     |
| 10  | Testing             | `node:test`                     | Built-in test runner + `assert/strict`                        |
| 11  | Zod                 | `zod`                           | Runtime schema validation + inferred types                    |
| 12  | dotenv              | `dotenv`                        | Loading & validating environment config                       |
| 13  | Day.js              | `dayjs`                         | Immutable date handling vs built-in `Date`                    |
| 14  | Express             | `express`                       | Routing, middleware, JSON APIs                                |
| 15  | Regular Expressions | (built-in)                      | Literals/flags, capture & named groups, `matchAll`, `replace` |
| 16  | Worker Threads      | `node:worker_threads`           | True CPU parallelism via message passing                      |

> Run the test example like any other file: `npx tsx examples/03_libraries/10_testing/01_node_test.ts`
> — it prints a TAP report ending in `# pass N  # fail 0`.
