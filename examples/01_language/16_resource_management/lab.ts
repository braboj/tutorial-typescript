// LAB - Resource Management
// =========================
// Implement each task below so that running this file produces exactly the
// output shown in the `// Expected:` comments. Work top to bottom.
//
//   Run:   npx tsx examples/01_language/16_resource_management/lab.ts
//
// Covered by this chapter: `using` declarations, Symbol.dispose (Disposable),
// reverse disposal order, disposal on error, `await using`, and
// Symbol.asyncDispose (AsyncDisposable).
// See the numbered example files in this folder if you get stuck.

// ---------------------------------------------------------------------------
// Task 1 - A disposable resource
// Define a class `Timer` that implements `Disposable`. Its constructor takes a
// `label: string` and prints `start <label>`. Its [Symbol.dispose]() method
// prints `stop <label>`. Then write a function that opens a `using` Timer with
// the label "render", prints "ticking", and lets it dispose at scope exit.
// Call that function.
// Expected: start render
// Expected: ticking
// Expected: stop render
// Tip: `using timer = new Timer("render");` - no manual cleanup call.

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 2 - Reverse disposal order
// Write a function that opens three `using` Timers in order with labels
// "outer", "middle", and "inner", then prints "work". Call it. Remember that
// resources are disposed in REVERSE order of declaration.
// Expected: start outer
// Expected: start middle
// Expected: start inner
// Expected: work
// Expected: stop inner
// Expected: stop middle
// Expected: stop outer

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 3 - Disposal still runs on error
// Write a function that opens a `using` Timer with label "tx" and then throws
// `new Error("rollback")`. Call it inside a try/catch and in the catch print
// `caught: <message>`. The Timer must still be disposed before the catch runs.
// Expected: start tx
// Expected: stop tx
// Expected: caught: rollback

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 4 - An async-disposable resource
// Define a class `Socket` that implements `AsyncDisposable`. Its constructor
// takes a `port: number` and prints `listen :<port>`. Its async
// [Symbol.asyncDispose]() prints `closed :<port>`. Add an async method
// `send(msg: string)` that returns a Promise resolving to `sent(<msg>)`.
// Expected: listen :8080

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 5 - Using the async resource
// Write an async function `serve` that opens `await using sock = new Socket(8080)`,
// awaits `sock.send("ping")` and prints its result, prints "handled", then lets
// the socket dispose at scope exit. Await `serve()` at the top level.
// Expected: listen :8080
// Expected: sent(ping)
// Expected: handled
// Expected: closed :8080
// Tip: `await using` awaits [Symbol.asyncDispose]() when the scope ends.

// TODO: your code here
