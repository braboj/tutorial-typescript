// Error Handling: try / catch / finally
// -------------------------------------
// Errors are thrown with `throw` and handled with try/catch. `finally` always
// runs - use it for cleanup. (For async error handling with await, see
// ../12_async/03_error_handling.ts.)

function parsePositive(input: string): number {
  const n = Number(input);
  if (Number.isNaN(n)) throw new Error(`not a number: "${input}"`);
  if (n < 0) throw new RangeError(`must be positive: ${n}`);
  return n;
}

// In TypeScript, a caught value is typed `unknown` - you must NARROW it before
// using it, because anything (not just Error) can be thrown.
function safeParse(input: string): string {
  try {
    return `parsed ${parsePositive(input)}`;
  } catch (err) {
    if (err instanceof RangeError) return `range error: ${err.message}`;
    if (err instanceof Error) return `error: ${err.message}`;
    return "unknown failure"; // something non-Error was thrown
  } finally {
    // Runs whether we returned or threw - e.g. release a lock, close a file.
    // (No output here; just demonstrating it always executes.)
  }
}

console.log(safeParse("42")); // -> parsed 42
console.log(safeParse("abc")); // -> error: not a number: "abc"
console.log(safeParse("-5")); // -> range error: must be positive: -5

// finally runs even when the try block returns:
function withFinally(): string {
  try {
    return "from try";
  } finally {
    console.log("finally ran"); // -> finally ran
  }
}
console.log(withFinally()); // -> from try

// You can throw anything, but ALWAYS throw Error instances - they carry a stack
// trace and work with instanceof. Throwing strings/objects is an anti-pattern.
