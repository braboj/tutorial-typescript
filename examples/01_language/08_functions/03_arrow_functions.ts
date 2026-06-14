// Arrow Functions
// ---------------
// A concise syntax for functions. They are most common as callbacks and inline
// functions. Key difference from `function`: arrows do NOT have their own
// `this`
// (covered in 05_this_context.ts).

const square = (x: number): number => x * x; // implicit return, no braces
// -> 36
console.log(square(6));

// With a body you need braces and an explicit return:
const describe = (x: number): string => {
  const kind = x >= 0 ? "non-negative" : "negative";
  return `${x} is ${kind}`;
};
// -> -4 is negative
console.log(describe(-4));

// To return an object literal, wrap it in parentheses:
const toPoint = (x: number, y: number) => ({ x, y });
// -> { x: 1, y: 2 }
console.log(toPoint(1, 2));

// Arrows shine as array-method callbacks:
const nums = [1, 2, 3, 4, 5];
// -> [ 2, 4 ]
console.log(nums.filter((n) => n % 2 === 0));
// -> [ 10, 20, 30, 40, 50 ]
console.log(nums.map((n) => n * 10));
// -> 15
console.log(nums.reduce((a, b) => a + b, 0));
