// Comments
// --------
// Comments are ignored by the compiler. Use them to explain *why*, not *what*.

// This is a single-line comment.

/*
  This is a block comment.
  It can span multiple lines.
*/

const taxRate = 0.19; // trailing comment: German VAT
// -> 0.19
console.log(taxRate);

// Special directive comments that TypeScript understands:

// @ts-expect-error - asserts the NEXT line has a type error (fails if it
// doesn't)
const wrong: number = "not a number";
// -> string
console.log(typeof wrong);

// @ts-ignore silences the next line's error without checking that one exists.
// Prefer @ts-expect-error: it self-cleans when the underlying bug is fixed.
