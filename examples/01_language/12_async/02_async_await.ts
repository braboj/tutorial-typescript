// async / await
// -------------
// `async`/`await` is syntactic sugar over promises that lets you write async
// code that READS like synchronous code. An `async` function always returns a
// Promise; `await` pauses until a promise settles.

function delay(ms: number, value: string): Promise<string> {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

// `await` unwraps the resolved value:
async function main(): Promise<void> {
  console.log("start");
  const a = await delay(10, "first");
  console.log(a);
  const b = await delay(10, "second");
  console.log(b);
  console.log("end");
}

// Prints start, then first, second, and end on separate lines as each await settles.
main();

// An async function's return value becomes a resolved promise:
async function getNumber(): Promise<number> {
  return 7; // automatically wrapped in Promise<number>
}
// -> number: 7
getNumber().then((n) => console.log("number:", n));
