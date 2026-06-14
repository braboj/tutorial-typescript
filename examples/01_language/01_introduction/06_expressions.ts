// Expressions
// -----------
// An EXPRESSION is any piece of code that evaluates to a VALUE. The slogan:
// statements DO something, expressions ARE something. Anywhere a value is
// expected, you can put an expression.

// Arithmetic and string expressions:
// -> 14
console.log(2 + 3 * 4);
// -> foobar
console.log("foo" + "bar");

// Comparisons and logic produce boolean values:
// -> true
console.log(5 > 3);
// -> false
console.log(true && false);

// Function calls are expressions (they evaluate to the return value) -> 7
console.log(Math.max(1, 7, 3));

// The ternary ?: is an expression form of if/else - it yields a value you can
// assign or pass along (unlike an `if` statement, which does not):
const n = 7;
const parity = n % 2 === 0 ? "even" : "odd";
// -> odd
console.log(parity);

// Assignment itself is an expression that evaluates to the assigned value:
let y: number;
// -> 42
console.log((y = 42));

// Expressions nest freely to any depth -> [ 4, 6 ]
console.log([1, 2, 3].map((v) => v * 2).filter((v) => v > 2));
