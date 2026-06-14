// LAB - Variables and Types
// ==========================
// Implement each task below so that running this file produces exactly the
// output shown in the `// Expected:` comments. Work top to bottom.
//
//   Run:   npx tsx examples/01_language/02_variables/lab.ts
//
// Covered by this chapter: let vs const, primitive types, any/unknown/never,
// arrays and tuples, object types, type inference and `as const`.
// See the numbered example files in this folder if you get stuck.

// ---------------------------------------------------------------------------
// Task 1 - let vs const
// Declare a `let` named `lives` starting at 3, then decrease it by one.
// Declare a `const` named `gravity` set to 9.81 (it must never be reassigned).
// Print `lives` then `gravity` on one line.
// Expected: 2 9.81

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 2 - const binding vs contents
// Create a `const` array named `cart` holding the strings "apple" and "bread".
// Add "milk" to the end of the array (the binding stays const, contents change).
// Print the array.
// Expected: [ 'apple', 'bread', 'milk' ]

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 3 - Primitive types
// Declare a string `planet` = "Mars", a number `moons` = 2, and a boolean
// `hasWater` = true, each with an explicit type annotation.
// Print the typeof each value on one line, in that order.
// Tip: `typeof` returns the lowercase type name as a string.
// Expected: string number boolean

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 4 - unknown and narrowing
// You are given a value typed as `unknown`. Before using it as a string you
// must narrow it. Check that `input` is a string with typeof, and if so print
// its uppercase form; otherwise the branch should not run.
const input: unknown = "hello";
// Expected: HELLO

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 5 - Tuples and destructuring
// Create a tuple typed as [string, number] named `medal` holding "gold" and 1.
// Destructure it into `metal` and `rank`, then print them as `gold #1`.
// Tip: use a template literal: `${metal} #${rank}`
// Expected: gold #1

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 6 - Object types and spread
// Create an object `book` with `title: "Dune"` and `pages: 412`.
// Then make a new object `reissue` that copies `book` but overrides pages to
// 500 (use spread). Print reissue.pages then book.pages on one line.
// Expected: 500 412

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 7 - Inference and as const
// Create an object `settings` using `as const` with `theme: "dark"` and
// `volume: 7`. Print settings.theme then settings.volume on one line.
// Tip: `as const` freezes the values to their literal, readonly types.
// Expected: dark 7

// TODO: your code here
