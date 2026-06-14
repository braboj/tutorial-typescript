// Function Overloads
// ------------------
// Overloads let one function present several distinct call signatures. You
// write
// the signatures first, then a single implementation that satisfies all of
// them.

// Overload signatures (no body):
function len(x: string): number;
function len(x: unknown[]): number;
// Implementation signature (not directly callable; must handle every overload):
function len(x: string | unknown[]): number {
  return x.length;
}

// -> 5
console.log(len("hello"));
// -> 3
console.log(len([1, 2, 3]));

// Overloads can return different types based on inputs:
function parse(value: string): string;
function parse(value: number): number;
function parse(value: string | number): string | number {
  return typeof value === "string" ? value.trim() : value * 2;
}
const a = parse("  hi  "); // typed as string
const b = parse(21); // typed as number
// -> hi 42
console.log(a, b);

// Often a union parameter is simpler than overloads - reach for overloads only
// when the return type genuinely depends on the argument type.
