// Comparison Operators
// --------------------
// ALWAYS use === / !== (strict). They compare without type coercion.
// The == / != (loose) operators coerce types and cause classic JS bugs.

const x: number = 1;
// -> true
console.log(x === 1);
// -> false
console.log(x === 2);

// The danger of loose equality. TypeScript even blocks `0 === ""` outright
// ("types have no overlap"), which is a feature. To demonstrate the coercion
// `==` performs at runtime, we launder the values through `unknown`:
const zero: unknown = 0;
const empty: unknown = "";
// -> true   (coercion!)  <- this is why we avoid ==
console.log(zero == empty);

// Ordering works on numbers and strings (lexicographic):
// -> true
console.log(3 < 5);
// -> true
console.log("apple" < "banana");

// Object equality compares REFERENCES, not contents:
const a = { v: 1 };
const b = { v: 1 };
// -> false  (different objects)
console.log(a === b);
// -> true   (same reference)
console.log(a === a);

// NaN is never equal to anything, including itself:
const nan: number = NaN;
// -> false
console.log(nan === nan);
// -> true  (the correct check)
console.log(Number.isNaN(nan));
