// Testing (node:test)
// -------------------
// Node ships a built-in test runner and assertion library - no Jest/Vitest
// install required. Run this file like any other example:
//
//   npx tsx examples/03_libraries/10_testing/01_node_test.ts
//
// It prints a TAP report ending in a summary like "# pass 5  # fail 0".
// In a real project you'd name files *.test.ts and run `node --test`.

import { test, describe, it, before, after } from "node:test";
import assert from "node:assert/strict"; // "strict" makes equal() use ===

// The code under test:
function add(a: number, b: number): number {
  return a + b;
}
async function fetchUser(id: number): Promise<{ id: number }> {
  if (id <= 0) throw new Error("bad id");
  return { id };
}

// A standalone test:
test("add: sums two numbers", () => {
  assert.equal(add(2, 3), 5);
});

// Common assertions:
test("assertions tour", () => {
  assert.equal(1 + 1, 2); // strict equality
  assert.deepEqual({ a: 1 }, { a: 1 }); // structural equality
  assert.ok([1, 2, 3].includes(2)); // truthy
  assert.notEqual(add(2, 2), 5); // inequality
});

// Grouping with describe/it, plus setup/teardown hooks:
describe("user service", () => {
  let calls = 0;
  before(() => {
    calls = 0;
  });
  after(() => {
    /* close db, etc. */
  });

  it("returns a user for a valid id", async () => {
    calls++;
    const user = await fetchUser(1);
    assert.deepEqual(user, { id: 1 });
  });

  it("rejects an invalid id", async () => {
    // assert.rejects checks that a promise throws:
    await assert.rejects(() => fetchUser(0), /bad id/);
  });
});
