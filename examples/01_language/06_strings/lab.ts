// LAB - Strings
// =============
// Implement each task below so that running this file produces exactly the
// output shown in the `// Expected:` comments. Work top to bottom.
//
//   Run:   npx tsx examples/01_language/06_strings/lab.ts
//
// Covered by this chapter: string basics (escapes, length, indexing,
// immutability), template literals & tagged templates, common string methods
// (trim/includes/replace/split/join/slice/pad/repeat, number<->string), and
// template literal types.
// See the numbered example files in this folder if you get stuck.

// ---------------------------------------------------------------------------
// Task 1 - Escapes, length and indexing
// Given the word below, print three lines: its length, its first character,
// and the character at index 3 (use charAt). Print one value per line.
// Expected: 9
// Expected: A
// Expected: a
const language = "Assembler";

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 2 - Immutability
// Strings are immutable, so methods return NEW strings. Build a lowercased
// copy of the word, then print the original and the copy on one line,
// separated by a space.
// Expected: Assembler assembler

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 3 - Template literals
// Use a backtick string with interpolation to print a sentence about the
// product below. Inside the same template, compute next year's price as a
// 10% increase (price * 1.1) directly in the ${} expression.
// Expected: Widget costs 50 now and 55 next year.
const product = "Widget";
const price = 50;

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 4 - Tagged template
// Write a tag function `bold` that wraps each interpolated value in
// asterisks (*value*) while leaving the literal parts unchanged. Then call it
// as a tagged template:  bold`Hello ${product} world`
// Tip: the tag receives (strings: TemplateStringsArray, ...values: unknown[]).
// Expected: Hello *Widget* world

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 5 - String methods
// Starting from the padded date string below, print four lines:
//   1. the trimmed value
//   2. split it on "/" and print the resulting array
//   3. join those parts with "." instead
//   4. the last 4 characters using slice with a negative index
// Expected: 2026/06/13
// Expected: [ '2026', '06', '13' ]
// Expected: 2026.06.13
// Expected: 0613
const stamp = "  2026/06/13  ";

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 6 - Padding, repeat, and number conversions
// Print three lines:
//   1. the number 5 as a string padded to width 3 with "0" (use padStart)
//   2. the string "-" repeated 5 times
//   3. the number 255 converted to a base-2 (binary) string
// Tip: use (n).toString(2) for binary.
// Expected: 005
// Expected: -----
// Expected: 11111111

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 7 - Template literal types
// Declare a type `Method` of "GET" | "POST", and a type `Route` that is
// `${Method} /api`. Then declare a const of type Route with the value
// "POST /api" and print it.
// Tip: this is a TYPE-level exercise; the runtime output is just the string.
// Expected: POST /api

// TODO: your code here
