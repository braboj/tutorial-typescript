// Logical Operators
// -----------------
// && (and), || (or), ! (not). They "short-circuit": they stop as soon as the
// result is known, and they RETURN one of the operands (not always a boolean).

// -> false
console.log(true && false);
// -> true
console.log(true || false);
// -> false
console.log(!true);

// Short-circuit return values. (We use typed variables so the compiler treats
// these as real runtime checks rather than known constants.)
const blank: string = "";
const filled: string = "value";
// -> fallback   ("" is falsy)
console.log(blank || "fallback");
// -> value
console.log(filled || "fallback");
// -> next   (left was truthy, so returns right)
console.log(filled && "next");

// Falsy values in JS/TS: false, 0, "", null, undefined, NaN. Everything else is
// truthy.
const zero: number = 0;
// -> default
console.log(zero || "default");
// -> 0   (see 04 - ?? only fills null/undefined!)
console.log(zero ?? "default");

// Logical assignment operators:
let config: { timeout?: number } = {};
config.timeout ||= 30; // assign only if current value is falsy
// -> 30
console.log(config.timeout);
