// LAB - Async
// ===========
// Implement each task below so that running this file produces exactly the
// output shown in the `// Expected:` comments. Work top to bottom.
//
//   Run:   npx tsx examples/01_language/12_async/lab.ts
//
// Covered by this chapter: promises (resolve/reject, then/catch), async/await,
// async error handling with try/catch, promise combinators (all, allSettled,
// race, any), and sequential vs parallel execution.
// See the numbered example files in this folder if you get stuck.

// ---------------------------------------------------------------------------
// Task 1 - A resolving promise
// Write a function `wait(ms, value)` that returns a Promise<string> which
// resolves with `value` after `ms` milliseconds (use setTimeout + resolve).
// Then call wait(10, "ready") and log the result with a .then().
// Expected: result: ready
// Tip: new Promise((resolve) => setTimeout(() => resolve(value), ms))

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 2 - A rejecting promise
// Write a function `check(n)` that returns Promise.reject(new Error("too low"))
// when n is below 10, otherwise Promise.resolve(n).
// Call check(3) and handle the rejection with .catch(), logging the message.
// Expected: caught: too low
// Tip: a caught Error has a `.message` property.

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 3 - async / await
// Write an async function `loadName()` that awaits wait(10, "Grace") (from
// Task 1) and returns the value. Call it and log "name:" followed by the value.
// Because loadName is async, calling it returns a Promise, so use .then().
// Expected: name: Grace

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 4 - try / catch / finally
// Write an async function `divide(a, b)` that throws new Error("divide by zero")
// when b is 0, otherwise returns a / b. In an async runner, call divide(8, 0)
// inside try/catch, log the error message, and log a cleanup line in finally.
// Narrow the caught value with `instanceof Error` before reading `.message`.
// Expected: error: divide by zero
// Expected: done
// Tip: the caught value is typed `unknown` in TypeScript.

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 5 - Promise.all
// Using wait from Task 1, await Promise.all of three calls:
// wait(10, "x"), wait(5, "y"), wait(1, "z"). Log the resulting array.
// Note that the order follows the array, NOT which finishes first.
// Expected: [ 'x', 'y', 'z' ]

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 6 - Promise.allSettled
// Build an array of two promises: one that resolves (wait(1, "ok")) and one
// that rejects (Promise.reject(new Error("bad"))). Await Promise.allSettled and
// log an array of just the `.status` strings.
// Expected: [ 'fulfilled', 'rejected' ]

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 7 - Promise.race
// Await Promise.race of wait(30, "tortoise") and wait(2, "hare") and log the
// winner. The race settles as soon as the FIRST promise settles.
// Expected: winner: hare

// TODO: your code here
