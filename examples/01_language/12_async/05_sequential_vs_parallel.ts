// Sequential vs Parallel
// ----------------------
// A common performance mistake: awaiting independent tasks one-by-one when they
// could run concurrently.

function task(ms: number, label: string): Promise<string> {
  return new Promise((resolve) => setTimeout(() => resolve(label), ms));
}

async function sequential(): Promise<void> {
  // Each await waits for the previous to finish: total time ~= sum of all
  // delays.
  const a = await task(30, "A");
  const b = await task(30, "B");
  const c = await task(30, "C");
  console.log("sequential:", a, b, c); // ~90ms
}

async function parallel(): Promise<void> {
  // Start all tasks first, THEN await them together: total ~= the slowest one.
  const pA = task(30, "A");
  const pB = task(30, "B");
  const pC = task(30, "C");
  const [a, b, c] = await Promise.all([pA, pB, pC]);
  console.log("parallel:", a, b, c); // ~30ms
}

async function main(): Promise<void> {
  await sequential();
  await parallel();
}
// Prints "sequential: A B C" then "parallel: A B C" on separate lines.
main();
// Both print the same values, but `parallel` finishes ~3x faster. Use
// sequential only when each step DEPENDS on the previous one's result.
