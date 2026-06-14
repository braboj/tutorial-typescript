// Running TypeScript
// ------------------
// Browsers and Node.js do not execute .ts files directly - TypeScript must be
// turned into JavaScript first. There are two common workflows:
//
//   1. `tsc`  - the official compiler. Emits .js files you then run with node.
//                 tsc examples/.../file.ts   ->   file.js
//                 node file.js
//
//   2. `tsx` - a zero-config runner that compiles in memory and runs in one
//   step.
//                 npx tsx examples/.../file.ts
//
// This tutorial uses tsx so every example is a single command, no build folder.
//
// Type-checking is separate from running. `tsx` runs your code even if it has
// type errors (great for experimenting); `npm run typecheck` checks types
// without running. Use both.

const runtime = typeof process !== "undefined" ? "Node.js" : "a browser";

// -> This file is executing on Node.js.
console.log(`This file is executing on ${runtime}.`);
