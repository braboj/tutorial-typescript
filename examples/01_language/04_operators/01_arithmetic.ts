// Arithmetic Operators
// --------------------
// -> 10
console.log(7 + 3);
// -> 4
console.log(7 - 3);
// -> 21
console.log(7 * 3);
// -> 2.3333333333333335  (always floating point)
console.log(7 / 3);
// -> 1   (remainder / modulo)
console.log(7 % 3);
// -> 1024 (exponentiation)
console.log(2 ** 10);

// Increment / decrement:
let n = 5;
// -> 5   (returns, then increments)
console.log(n++);
// -> 6
console.log(n);
// -> 7   (increments, then returns)
console.log(++n);

// Integer division: there is no `//` operator - use Math.trunc or Math.floor.
// -> 2
console.log(Math.trunc(7 / 3));
// -> -3 (floor rounds toward -Infinity)
console.log(Math.floor(-7 / 3));

// Compound assignment combines an operation with assignment:
let total = 100;
total += 25; // same as total = total + 25
total *= 2;
// -> 250
console.log(total);
