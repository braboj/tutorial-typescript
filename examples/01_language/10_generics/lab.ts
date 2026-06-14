// LAB - Generics
// ==============
// Implement each task below so that running this file produces exactly the
// output shown in the `// Expected:` comments. Work top to bottom.
//
//   Run:   npx tsx examples/01_language/10_generics/lab.ts
//
// Covered by this chapter: generic functions, generic classes, generic
// constraints (extends / keyof), generic interfaces & type aliases, built-in
// utility types (Partial, Pick, Omit, Record, ...).
// See the numbered example files in this folder if you get stuck.

// ---------------------------------------------------------------------------
// Task 1 - Generic function: last element
// Write a generic function `last<T>(items: T[]): T | undefined` that returns
// the LAST element of an array (or undefined if empty). Call it with the array
// [3, 6, 9] and print the result.
// Expected: 9
// Tip: arr[arr.length - 1] gives the last item; let T be inferred.

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 2 - Multiple type parameters
// Write a generic function `swap<A, B>(a: A, b: B): [B, A]` that returns the
// two arguments as a tuple in REVERSED order. Call it with ("level", 1) and
// print the resulting tuple.
// Expected: [ 1, 'level' ]

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 3 - Generic class: Queue
// Implement a generic class `Queue<T>` with:
//   - enqueue(item: T): void   (adds to the back)
//   - dequeue(): T | undefined (removes from the front)
//   - get length(): number
// Create a Queue<string>, enqueue "a" then "b", then print the result of one
// dequeue() call followed by the current length.
// Expected: a 1
// Tip: back an array with push() for enqueue and shift() for dequeue.

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 4 - Constraint with keyof: pluck a property
// Write `pluck<T, K extends keyof T>(obj: T, key: K): T[K]` that returns the
// value at the given key. Given the object below, print the city.
const place = { city: "Berlin", population: 3700000 };
// Expected: Berlin

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 5 - Constraint with extends: total length
// Write `totalLength<T extends { length: number }>(a: T, b: T): number` that
// returns the SUM of the two arguments' `.length` properties. Call it once with
// the strings "cat" and "mouse" and print the result.
// Expected: 8

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 6 - Generic type alias: Result
// Define `type Result<T, E = string>` as a union of
//   { ok: true; value: T } | { ok: false; error: E }
// Write `parseAmount(text: string): Result<number>` that returns an ok result
// with the parsed number, or an error "not a number" when parsing fails.
// Print the result of parsing "42", then the result of parsing "abc".
// Expected: { ok: true, value: 42 }
// Expected: { ok: false, error: 'not a number' }
// Tip: Number("abc") is NaN; check with Number.isNaN.

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 7 - Utility types: Pick and Partial
// Given the Product interface below, declare a `type ProductCard` using
// Pick<Product, ...> that keeps ONLY `title` and `price`. Create one ProductCard
// value and print it. Then write `applyDiscount(p: Product, changes: Partial<Product>): Product`
// that merges the changes onto p, and print the title of the updated product.
interface Product {
  sku: string;
  title: string;
  price: number;
}
const widget: Product = { sku: "W-1", title: "Widget", price: 10 };
// Expected: { title: 'Gadget', price: 25 }
// Expected: Widget Pro
// Tip: a ProductCard of { title: "Gadget", price: 25 }; then change title to "Widget Pro".

// TODO: your code here
