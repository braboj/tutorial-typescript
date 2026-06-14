// Function Declarations
// ---------------------
// Annotate parameter types and (optionally) the return type. The return type is
// usually inferred, but writing it documents intent and catches mistakes.

function add(a: number, b: number): number {
  return a + b;
}
// -> 5
console.log(add(2, 3));

// Function expression assigned to a const:
const multiply = function (a: number, b: number): number {
  return a * b;
};
// -> 20
console.log(multiply(4, 5));

// A function type can be declared separately:
type BinaryOp = (a: number, b: number) => number;
const subtract: BinaryOp = (a, b) => a - b; // params inferred from the type
// -> 6
console.log(subtract(10, 4));

// Functions returning nothing use `void`:
function logLine(msg: string): void {
  console.log(msg);
}
// -> hi
logLine("hi");
