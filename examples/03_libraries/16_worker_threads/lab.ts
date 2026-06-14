// LAB - Worker Threads
// ====================
// Implement each task below so that running this file produces exactly the
// output shown in the `// Expected:` comments. Work top to bottom.
//
//   Run:   npx tsx examples/03_libraries/16_worker_threads/lab.ts
//
// Covered by this chapter: node:worker_threads, running a Worker with
// { eval: true }, passing input via workerData, returning results with
// postMessage, wrapping a worker in a Promise, and running CPU-bound tasks in
// parallel with Promise.all plus terminate().
// See the numbered example files in this folder if you get stuck.

// ---------------------------------------------------------------------------
// Task 1 - Import the Worker class
// Import the `Worker` class from "node:worker_threads" at the top of the file.
// (The later tasks rely on this import existing.)
// Expected: (no output for this task)

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 2 - Write a CPU-bound worker body as a source string
// Define a `const workerSource` string holding the worker's code. Inside it,
// require parentPort and workerData from "node:worker_threads", compute the
// SUM of all integers from 1 up to workerData (inclusive) with a plain loop,
// then postMessage that sum back to the parent.
// Tip: for workerData = 100 the sum is 5050.
// Expected: (no output for this task)

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 3 - Run one task on a worker thread and resolve a Promise
// Write a function `sumToInWorker(n: number): Promise<number>` that creates a
// new Worker from workerSource with { eval: true, workerData: n }, resolves the
// Promise with the message it receives, rejects on "error", and calls
// terminate() once the result arrives.
// Then, inside an async main(), await sumToInWorker(100) and print it.
// Expected: 5050

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 4 - Run several tasks IN PARALLEL across threads
// Still inside main(): for the inputs [10, 50, 1000], call sumToInWorker on each
// and combine them with Promise.all so they run on separate threads at once.
// Print the resulting array of sums.
// Tip: sum to 10 is 55, sum to 50 is 1275, sum to 1000 is 500500.
// Expected: [ 55, 1275, 500500 ]

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 5 - Report the largest parallel result
// Using the array from Task 4, print a sentence naming the biggest sum. Pick it
// from the array (do not hardcode the number in the string).
// Expected: largest sum: 500500

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 6 - Call main()
// Invoke main() so the file actually runs the tasks above.
// Expected: (drives the output of Tasks 3-5)

// TODO: your code here
