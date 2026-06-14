// any, unknown, and never
// ------------------------
// Three special types you will meet constantly.

// `any` opts OUT of type checking. It is contagious and dangerous - avoid it.
let loose: any = 4;
loose = "now a string"; // no error
// loose.foo.bar; // compiles fine, then CRASHES at runtime. This is why `any`
// is risky.
// -> now a string
console.log(loose);

// `unknown` is the safe version of `any`: you can hold anything, but you must
// narrow it before use.
let safe: unknown = JSON.parse('{"x": 1}');
// safe.x;          // Error: 'safe' is of type 'unknown'.
if (typeof safe === "object" && safe !== null && "x" in safe) {
  // -> got an object with x
  console.log("got an object with x");
}

// `never` is the type with NO values. It marks code that can't return.
function fail(message: string): never {
  throw new Error(message);
}
try {
  fail("boom");
} catch (e) {
  // -> boom
  console.log((e as Error).message);
}
