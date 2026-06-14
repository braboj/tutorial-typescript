// Generic Functions
// -----------------
// Generics let you write code that works over MANY types while keeping full
// type
// safety. A type parameter (by convention <T>) is a placeholder filled in at
// the
// call site.

// Without generics you'd lose type info (returning `any`). With <T>, the return
// type matches the argument type.
function identity<T>(value: T): T {
  return value;
}
const n = identity(42); // T inferred as number
const s = identity("hi"); // T inferred as string
// -> 42 hi
console.log(n, s);

// A generic that works on arrays of any element type -> 10
function first<T>(items: T[]): T | undefined {
  return items[0];
}
console.log(first([10, 20, 30]));
// -> a
console.log(first(["a", "b"]));

// Multiple type parameters -> [ 'id', 7 ]
function pair<A, B>(a: A, b: B): [A, B] {
  return [a, b];
}
console.log(pair("id", 7));

// You can specify the type explicitly when inference isn't enough -> undefined
const empty = first<number>([]);
console.log(empty);
