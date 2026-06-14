// Promises
// --------
// A Promise represents a value that will exist LATER (or a failure). It is the
// foundation of asynchronous TypeScript. A promise is pending, then either
// fulfilled (resolve) or rejected (reject).

// A promise that fulfills after a delay:
function delay(ms: number, value: string): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), ms);
  });
}

// Consume it with .then() for success and .catch() for failure -> got: done
delay(10, "done")
  .then((result) => console.log("got:", result))
  .catch((err) => console.error("failed:", err));

// A rejected promise:
function risky(fail: boolean): Promise<number> {
  return fail ? Promise.reject(new Error("nope")) : Promise.resolve(42);
}

// -> caught: nope
risky(true)
  .then((n) => console.log("value:", n))
  .catch((err: Error) => console.log("caught:", err.message));

// Promise.resolve / reject create already-settled promises - handy for tests -> instant
Promise.resolve("instant").then((v) => console.log(v));
