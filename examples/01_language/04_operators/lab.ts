// LAB - Operators
// ================
// Implement each task below so that running this file produces exactly the
// output shown in the `// Expected:` comments. Work top to bottom.
//
//   Run:   npx tsx examples/01_language/04_operators/lab.ts
//
// Covered by this chapter: arithmetic & compound assignment, increment/decrement,
// strict comparison & NaN, logical operators & short-circuiting, nullish
// coalescing & optional chaining, bitwise flags.
// See the numbered example files in this folder if you get stuck.

// ---------------------------------------------------------------------------
// Task 1 - Arithmetic and exponentiation
// Compute the area of a square with side 9 (side raised to the power of 2),
// then print it. Use the exponentiation operator, not multiplication.
// Expected: 81

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 2 - Modulo and integer division
// A delivery has 23 items packed 5 per box.
// Print the number of FULL boxes (integer division - use Math.trunc), then
// print the number of leftover items (the remainder).
// Expected: 4
// Expected: 3

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 3 - Compound assignment
// Start with a given balance of 200. Subtract 50, then multiply by 3 using
// compound assignment operators (-= and *=). Print the final balance.
const balance = 200;
// Expected: 450

// TODO: your code here (you may declare a new mutable variable from balance)

// ---------------------------------------------------------------------------
// Task 4 - Strict comparison and NaN
// Given the value below, print whether it strictly equals the string "42"
// (it should not, because one is a number). Then print whether the value is
// NaN using the correct check.
const answer: number = 42;
// Expected: false
// Expected: false

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 5 - Logical short-circuit and falsy values
// Given an empty username string, print a fallback using ||.
// Then, given a numeric score of 0, print it using ?? so that 0 is kept
// rather than replaced by the fallback.
const username: string = "";
const score: number = 0;
// Expected: guest
// Expected: 0

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 6 - Optional chaining with a default
// Given the settings object below (which has no `display` section), safely read
// `settings.display?.theme` and print "light" when it is missing, using ??.
const settings: { display?: { theme?: string } } = {};
// Expected: light

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 7 - Bitwise flags
// Define three permission flags using left shift: VIEW = 1<<0, EDIT = 1<<1,
// SHARE = 1<<2. Combine VIEW and SHARE with | into a `granted` value and print
// it. Then print whether the EDIT flag is set (it is not).
// Expected: 5
// Expected: false

// TODO: your code here
