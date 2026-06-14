// Concurrency (starter)
// ---------------------
// Node.js runs your JS on a SINGLE thread with an event loop, so "concurrency"
// usually means overlapping I/O via promises - not parallel CPU work. For true
// CPU parallelism, Node offers Worker Threads (a future file in this section).
//
// This starter shows a concurrency pattern you'll use constantly: a bounded
// "worker pool" that processes a queue with limited parallelism.

function work(id: number, ms: number): Promise<string> {
  return new Promise((resolve) => setTimeout(() => resolve(`job-${id}`), ms));
}

async function runPool<T>(
  tasks: Array<() => Promise<T>>,
  concurrency: number,
): Promise<T[]> {
  const results: T[] = [];
  let cursor = 0;

  async function worker(): Promise<void> {
    while (cursor < tasks.length) {
      const index = cursor++;
      results[index] = await tasks[index]!();
    }
  }

  // Start `concurrency` workers that all pull from the shared cursor.
  await Promise.all(Array.from({ length: concurrency }, () => worker()));
  return results;
}

async function main(): Promise<void> {
  const tasks = [1, 2, 3, 4, 5].map((id) => () => work(id, 10));
  const out = await runPool(tasks, 2); // at most 2 run at once
  // -> [ 'job-1', 'job-2', 'job-3', 'job-4', 'job-5' ]
  console.log(out);
}
main();
