// LAB - Concurrency
// =================
// Implement each task below so that running this file produces exactly the
// output shown in the `// Expected:` comments. Work top to bottom.
//
//   Run:   npx tsx examples/03_libraries/02_concurrency/lab.ts
//
// Covered by this chapter: async/await, promise-returning helpers, overlapping
// I/O, Promise.all to fan out and collect results in order, and a bounded
// worker pool that limits how many tasks run at once.
// See the numbered example files in this folder if you get stuck.

// ---------------------------------------------------------------------------
// Task 1 - A promise-returning delay
// Implement `delay(ms)` that returns a Promise resolving (with no value) after
// `ms` milliseconds. Then, inside an async function, await delay(10) and print
// a message once it resolves.
// Tip: wrap setTimeout in `new Promise((resolve) => ...)`.
// Expected: waited 10ms

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 2 - Resolve a labelled value
// Implement `fetchLabel(name, ms)` that returns a Promise<string> resolving to
// `label-<name>` after `ms` milliseconds. Await a single call with name "alpha"
// and ms 5, then print the resolved string.
// Expected: label-alpha

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 3 - Fan out with Promise.all
// Use the `fetchLabel` helper from Task 2 to start three calls for the names
// "a", "b" and "c" (each with ms 5) and collect them with Promise.all.
// Print the resulting array. Note the results stay in the order you passed
// them in, regardless of which finishes first.
// Expected: [ 'label-a', 'label-b', 'label-c' ]

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 4 - Sequential vs overlapping timing (assert a stable property)
// Two awaited delay(20) calls run one after another, so total time is about
// 40ms; the same two via Promise.all overlap and take about 20ms. Instead of
// printing raw (non-deterministic) timings, compute both and print whether the
// parallel run took less wall-clock time than the sequential run.
// Tip: record Date.now() before/after each style and compare the elapsed ms.
// Expected: parallel faster: true

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 5 - Bounded worker pool
// Implement `runPool(tasks, concurrency)` that runs the given task functions
// with at most `concurrency` of them in flight at once, returning the results
// in the SAME order as `tasks`. Build six tasks that resolve to their squared
// index value (1, 4, 9, 16, 25, 36) using a short delay, run them with a
// concurrency of 3, and print the collected array.
// Tip: spawn `concurrency` workers that each pull the next index from a shared
//      cursor until the queue is drained.
// Expected: [ 1, 4, 9, 16, 25, 36 ]

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 6 - Count peak concurrency
// Extend the worker-pool idea: track how many tasks are running simultaneously
// by incrementing a counter when a task starts and decrementing when it ends,
// recording the maximum value seen. Run eight tasks with a concurrency limit of
// 4 and print the peak observed concurrency (which must not exceed the limit).
// Expected: peak: 4

// TODO: your code here
