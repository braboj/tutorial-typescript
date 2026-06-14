// Promise Combinators
// -------------------
// Tools for coordinating MANY promises at once.

function delay(ms: number, value: string): Promise<string> {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}
function fail(ms: number, msg: string): Promise<string> {
  return new Promise((_, reject) =>
    setTimeout(() => reject(new Error(msg)), ms),
  );
}

async function main(): Promise<void> {
  // Promise.all: wait for ALL to fulfill; rejects if ANY rejects.
  const all = await Promise.all([delay(10, "a"), delay(5, "b"), delay(1, "c")]);
  // -> [ 'a', 'b', 'c' ]   (order preserved, not by time)
  console.log(all);

  // Promise.allSettled: wait for all, never rejects; reports each outcome.
  const settled = await Promise.allSettled([delay(1, "ok"), fail(1, "boom")]);
  // -> [ 'fulfilled', 'rejected' ]
  console.log(settled.map((r) => r.status));

  // Promise.race: settle as soon as the FIRST one settles (fulfill or reject).
  // -> fast
  const winner = await Promise.race([delay(20, "slow"), delay(1, "fast")]);
  console.log(winner);

  // Promise.any: first to FULFILL wins; ignores rejections (unless all reject).
  // -> good
  const firstOk = await Promise.any([fail(1, "x"), delay(5, "good")]);
  console.log(firstOk);
}

main();
