// Enums
// -----
// Enums give names to a set of related constants. TypeScript has numeric and
// string enums. Note: many teams prefer union-of-literals (see 04) because
// enums generate runtime code and have a few quirks.

enum Status {
  Pending, // 0
  Active, // 1
  Closed, // 2
}
// -> 1
console.log(Status.Active);
// numeric enums are reverse-mapped -> Active
console.log(Status[1]);

// String enums are more readable when logged or serialized:
enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE",
}
// -> GREEN
console.log(Color.Green);

function paint(c: Color): string {
  return `Painting ${c}`;
}
// -> Painting BLUE
console.log(paint(Color.Blue));

// `const enum` is inlined at compile time (no runtime object), but is
// incompatible
// with some tooling. When in doubt, prefer a union of string literals:
type StatusLiteral = "pending" | "active" | "closed";
const s: StatusLiteral = "active";
// -> active
console.log(s);
