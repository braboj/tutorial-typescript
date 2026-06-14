// LAB - Testing (node:test)
// ==========================
// Implement each task below so that running this file produces exactly the
// output shown in the `// Expected:` comments. Work top to bottom.
//
//   Run:   npx tsx examples/03_libraries/10_testing/lab.ts
//
// This file uses Node's built-in test runner. It prints a TAP report. The
// `// Expected:` lines below describe the TAP summary counters a correct
// solution produces (the exact spacing of the summary may vary, but the
// pass/fail/tests numbers must match). After all tests pass, the final
// summary should report "# pass 6", "# fail 0", and "# tests 6".
//
// Covered by this chapter: the node:test runner, standalone test(),
// assert/strict assertions (equal, deepEqual, ok, notEqual, throws/rejects),
// grouping with describe/it, and before/after hooks.
// See the numbered example files in this folder if you get stuck.

// You will need these imports. Add the ones each task mentions:
//   import { test, describe, it, before, after } from "node:test";
//   import assert from "node:assert/strict";

// The code under test (do not modify):
function multiply(a: number, b: number): number {
  return a * b;
}
function makeRange(n: number): number[] {
  if (n < 0) throw new Error("negative length");
  return Array.from({ length: n }, (_, i) => i);
}
async function loadConfig(name: string): Promise<{ name: string; ok: boolean }> {
  if (name === "") throw new Error("empty name");
  return { name, ok: true };
}

// ---------------------------------------------------------------------------
// Task 1 - A standalone test
// Import `test` from "node:test" and `assert` from "node:assert/strict".
// Write a test named "multiply: products" that asserts multiply(4, 5) equals 20.
// Expected: this adds 1 passing test to the summary.
// Tip: assert.equal(actual, expected).

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 2 - Structural equality
// Write a test named "makeRange: builds a range" that asserts makeRange(3)
// deep-equals the array [0, 1, 2]. A plain assert.equal would fail on arrays.
// Expected: this adds 1 passing test to the summary.
// Tip: assert.deepEqual compares structure, not identity.

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 3 - Truthy and inequality checks
// Write a test named "range checks" that:
//   - asserts makeRange(5) has a length of 5 (use assert.ok with a comparison),
//   - asserts makeRange(2) is NOT deep-equal to [0, 1, 2] (use assert.notDeepEqual).
// Expected: this adds 1 passing test to the summary.

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 4 - Asserting a synchronous throw
// Write a test named "makeRange: rejects negative length" that asserts calling
// makeRange(-1) throws an error whose message matches /negative/.
// Expected: this adds 1 passing test to the summary.
// Tip: assert.throws(() => ..., /negative/).

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 5 - Grouping with describe/it and a hook
// Import `describe`, `it`, and `before` from "node:test".
// Create a describe block named "config loader". Inside it:
//   - declare `let loads = 0;`
//   - in a before() hook, reset loads to 0,
//   - add an async it() named "loads a valid config" that increments loads,
//     awaits loadConfig("db"), and asserts the result deep-equals
//     { name: "db", ok: true }.
// Expected: this adds 1 passing test to the summary.

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 6 - Asserting an async rejection
// Inside the same "config loader" describe block (or a new one), add an async
// it() named "rejects an empty name" that asserts loadConfig("") rejects with
// an error matching /empty/.
// Expected: this adds 1 passing test to the summary.
// Tip: await assert.rejects(() => loadConfig(""), /empty/).

// TODO: your code here
