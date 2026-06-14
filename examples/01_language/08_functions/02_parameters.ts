// Parameters: optional, default, and rest
// ----------------------------------------

// Optional parameter (?): may be omitted, becomes undefined.
function greet(name: string, title?: string): string {
  return title ? `${title} ${name}` : name;
}
// -> Ada
console.log(greet("Ada"));
// -> Dr. Ada
console.log(greet("Ada", "Dr."));

// Default parameter: used when the argument is missing or undefined.
function power(base: number, exp: number = 2): number {
  return base ** exp;
}
// -> 25
console.log(power(5));
// -> 125
console.log(power(5, 3));

// Rest parameters collect remaining arguments into an array.
function sum(...nums: number[]): number {
  return nums.reduce((acc, n) => acc + n, 0);
}
// -> 10
console.log(sum(1, 2, 3, 4));

// Object parameters with destructuring are idiomatic for many options:
function createUser({
  name,
  admin = false,
}: {
  name: string;
  admin?: boolean;
}) {
  return `${name} (admin: ${admin})`;
}
// -> Linus (admin: false)
console.log(createUser({ name: "Linus" }));
// -> Ada (admin: true)
console.log(createUser({ name: "Ada", admin: true }));
