// Type Predicates & Assertion Functions
// -------------------------------------
// Two tools for teaching the compiler what you know at runtime. A type PREDICATE
// (`x is T`) narrows inside an `if`. An ASSERTION FUNCTION (`asserts ...`) narrows
// everything AFTER the call by throwing on failure. Both are everywhere in
// validation-heavy code, and reading it requires recognizing them.

// A type predicate returns a boolean, but its `x is T` return type tells the
// compiler what a `true` result PROVES.
function isStringArray(x: unknown): x is string[] {
  return Array.isArray(x) && x.every((e) => typeof e === "string");
}
const data: unknown = ["a", "b"];
if (isStringArray(data)) {
  console.log(data.join("-")); // data is string[] here -> a-b
}

// An assertion function narrows by THROWING. `asserts x is T` means: if this call
// returns normally, x is T for the rest of the scope - no `if` block needed.
function assertIsNumber(x: unknown): asserts x is number {
  if (typeof x !== "number") throw new TypeError("not a number");
}
function double(value: unknown): number {
  assertIsNumber(value);
  return value * 2; // value is `number` from here on
}
console.log(double(21)); // -> 42

// The `asserts condition` form (no `is`) narrows from a boolean condition - this
// is exactly how Node's built-in `assert()` is typed.
function assert(condition: unknown, msg: string): asserts condition {
  if (!condition) throw new Error(msg);
}
function getEnv(key: string): string {
  const value = process.env[key]; // string | undefined (noUncheckedIndexedAccess)
  assert(value !== undefined, `${key} is not set`);
  return value; // narrowed to `string`
}
process.env.APP_NAME = "ts-demo";
console.log(getEnv("APP_NAME")); // -> ts-demo

// Why it matters: assertion functions let validation read top-to-bottom instead
// of nesting, while still giving full type narrowing to everything downstream.
