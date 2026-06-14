// Typed Pipelines (pipe / compose)
// --------------------------------
// Functional code chains small functions: each one's output feeds the next. The
// hard part is TYPING the chain so every step's input matches the previous step's
// output, with the final type inferred. Overloads (or variadic tuple types) thread
// the types A -> B -> C -> D across the steps.

// One overload per arity describes how the types flow through the chain.
function pipe<A, B>(a: A, ab: (a: A) => B): B;
function pipe<A, B, C>(a: A, ab: (a: A) => B, bc: (b: B) => C): C;
function pipe<A, B, C, D>(
  a: A,
  ab: (a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
): D;
// The implementation just folds the value through every function in turn.
function pipe(value: unknown, ...fns: Array<(x: unknown) => unknown>): unknown {
  return fns.reduce((acc, fn) => fn(acc), value);
}

const double = (n: number): number => n * 2;
const toLabel = (n: number): string => `value=${n}`;
const shout = (s: string): string => s.toUpperCase();

// Each link is checked against the previous one; the result type is inferred as
// `string` here because the last function returns a string.
const result = pipe(21, double, toLabel, shout);
console.log(result); // -> VALUE=42

// A broken link is a compile error - reorder so `shout` receives a number:
//   pipe(21, double, shout, toLabel); // Error: number not assignable to string

console.log(pipe("  hi ", (s: string) => s.trim(), shout)); // -> HI

// `pipe` runs eagerly left-to-right; `compose` is the same idea right-to-left.
// Real libraries (RxJS, fp-ts, Ramda) generate these overloads up to ~20 arity -
// now you can read why their signatures look the way they do.
