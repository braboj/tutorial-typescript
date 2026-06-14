// Worker Threads (node:worker_threads)
// ------------------------------------
// Node runs your JS on one thread, so a CPU-heavy task BLOCKS everything
// (timers,
// requests, etc.) until it finishes. Worker threads run code on SEPARATE
// threads
// for true parallelism - use them for CPU-bound work, not I/O (promises already
// handle I/O concurrency; see ../02_concurrency).
//
// Workers communicate by MESSAGE PASSING: you send input via workerData and get
// results via postMessage - they don't share memory (except SharedArrayBuffer).
//
// NOTE: a worker normally lives in its own .ts/.js file. Because this tutorial
// runs through tsx (which doesn't auto-load .ts inside workers), we define the
// worker inline as source via `{ eval: true }` so the example stays runnable.

import { Worker } from "node:worker_threads";

// The worker body. It reads workerData, does CPU work, and posts the result.
const workerSource = `
  const { parentPort, workerData } = require("node:worker_threads");
  // A deliberately CPU-bound task: count primes up to a limit.
  function countPrimes(limit) {
    let count = 0;
    for (let n = 2; n <= limit; n++) {
      let isPrime = true;
      for (let d = 2; d * d <= n; d++) {
        if (n % d === 0) { isPrime = false; break; }
      }
      if (isPrime) count++;
    }
    return count;
  }
  parentPort.postMessage(countPrimes(workerData));
`;

// Run one CPU task on its own thread and resolve with the result.
function countPrimesInWorker(limit: number): Promise<number> {
  return new Promise((resolve, reject) => {
    const worker = new Worker(workerSource, { eval: true, workerData: limit });
    worker.on("message", (result: number) => {
      resolve(result);
      void worker.terminate(); // free the thread when done
    });
    worker.on("error", reject);
  });
}

async function main(): Promise<void> {
  // Run several CPU-bound tasks IN PARALLEL across threads. On a multi-core
  // machine these overlap, unlike a normal blocking loop on the main thread.
  const limits = [10_000, 20_000, 50_000];
  const counts = await Promise.all(limits.map((n) => countPrimesInWorker(n)));
  // -> [ 1229, 2262, 5133 ]
  console.log(counts);

  // Sanity check on the main thread - the numbers are deterministic.
  // -> primes under 50000: 5133
  console.log(`primes under 50000: ${counts[2]}`);
}

main();
