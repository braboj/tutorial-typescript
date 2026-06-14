// LAB - Error Handling
// ====================
// Implement each task below so that running this file produces exactly the
// output shown in the `// Expected:` comments. Work top to bottom.
//
//   Run:   npx tsx examples/01_language/13_error_handling/lab.ts
//
// Covered by this chapter: throw, try/catch/finally, narrowing caught unknown
// values, custom Error subclasses, error chaining with `cause`, and the
// Result-as-value pattern.
// See the numbered example files in this folder if you get stuck.

// ---------------------------------------------------------------------------
// Task 1 - Throw and catch
// Write a function `withdraw(balance: number, amount: number): number` that
// throws `new Error("insufficient funds")` when `amount` is greater than
// `balance`, and otherwise returns the remaining balance. Then call it inside a
// try/catch: on success print the number, on failure print the error message.
// Print the result of withdraw(100, 30), then the result of withdraw(50, 80).
// Expected: 70
// Expected: insufficient funds
// Tip: A caught value is typed `unknown`; check `instanceof Error` before
// reading `.message`.

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 2 - finally always runs
// Write a function `readResource(): string` that returns "data" from its try
// block and logs "closing connection" in a finally block. Call it and print
// the returned value AFTER the function runs.
// Expected: closing connection
// Expected: data

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 3 - Narrow different error types
// Write `parseTemperature(input: string): number` that throws a `TypeError`
// with message `bad input: "<input>"` when the input is not a number, and a
// `RangeError` with message `below absolute zero: <n>` when the number is below
// -273. Otherwise return the number. Then write a handler that returns:
//   - "type: <message>" for a TypeError
//   - "range: <message>" for a RangeError
//   - "other" for anything else
// Print the handled results for "98.6", "xyz", and "-300".
// Expected: 98.6
// Expected: type: bad input: "xyz"
// Expected: range: below absolute zero: -300

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 4 - A custom error class
// Define a class `NotFoundError` that extends `Error`, takes a `resource`
// string and a `message`, stores `resource` as a public readonly property, and
// sets `this.name = "NotFoundError"`. Write `lookup(id: number)` that throws
// `new NotFoundError("user", "no user with id 7")` when id is 7. In a handler,
// when you catch a NotFoundError print `<resource>: <message>`.
// Expected: user: no user with id 7

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 5 - Error chaining with cause
// Write a function `loadSettings()` that tries to `JSON.parse("{ oops")` and,
// on failure, throws `new Error("could not load settings", { cause: err })`.
// Catch it and print the outer error's message, then print whether its `.cause`
// is an instance of `SyntaxError` (true/false).
// Expected: could not load settings
// Expected: true

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 6 - The Result pattern
// Define `type Result<T, E = Error> = { ok: true; value: T } | { ok: false; error: E }`
// and tiny `ok` / `err` helpers. Write `sqrt(n: number): Result<number, string>`
// that returns an error "negative input" when n < 0, otherwise the square root.
// Print the value of sqrt(81) when ok, and the "error: <error>" message when
// sqrt(-4) fails.
// Expected: 9
// Expected: error: negative input
// Tip: The type forces you to check `.ok` before touching `.value`.

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 7 - Wrap a throwing API into a Result
// Reuse your Result type. Write `safeDivide(a: number, b: number): Result<number, string>`
// that throws inside a try when b is 0 but returns the quotient otherwise, and
// converts any thrown error into `err(<caught message>)`. Print the boolean
// `.ok` for safeDivide(20, 4) and for safeDivide(20, 0).
// Expected: true
// Expected: false

// TODO: your code here
