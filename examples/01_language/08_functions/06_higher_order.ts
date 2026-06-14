// Higher-Order Functions
// ----------------------
// Functions that take functions as arguments and/or return functions. They are
// the backbone of functional-style TypeScript.

// Taking a function as a parameter:
function repeat(n: number, action: (i: number) => void): void {
  for (let i = 0; i < n; i++) action(i);
}
// Prints "tick 0", "tick 1" and "tick 2" on separate lines.
repeat(3, (i) => console.log(`tick ${i}`));

// Returning a function (a closure that "remembers" its environment):
function multiplier(factor: number): (n: number) => number {
  return (n) => n * factor;
}
const triple = multiplier(3);
// -> 30
console.log(triple(10));

// Composition: build new behaviour by combining functions.
const compose =
  <A, B, C>(f: (b: B) => C, g: (a: A) => B) =>
  (a: A): C =>
    f(g(a));

const addOne = (n: number) => n + 1;
const double = (n: number) => n * 2;
const addThenDouble = compose(double, addOne);
// -> 12   ((5 + 1) * 2)
console.log(addThenDouble(5));

// Closures capture state - here, a private counter:
function makeCounter(): () => number {
  let count = 0;
  return () => ++count;
}
const next = makeCounter();
// -> 1 2 3
console.log(next(), next(), next());
