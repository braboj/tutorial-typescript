// LAB - Iterators & Generators
// ============================
// Implement each task below so that running this file produces exactly the
// output shown in the `// Expected:` comments. Work top to bottom.
//
//   Run:   npx tsx examples/01_language/14_iterators_and_generators/lab.ts
//
// Covered by this chapter: iterables & [Symbol.iterator], custom iterators,
// generator functions (function*) and yield, yield* delegation, two-way
// next(value), and lazy/infinite sequences with generator combinators.
// See the numbered example files in this folder if you get stuck.

// ---------------------------------------------------------------------------
// Task 1 - Iterate a built-in iterable
// A string is iterable. Loop over the word "abc" with for...of and, for each
// character, write the character followed by a "-" to stdout (no newline yet).
// After the loop, print an empty line with console.log().
// Expected: a-b-c-

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 2 - Make your own type iterable
// Define a class `Countdown` that is Iterable<number>. Its constructor takes a
// starting number `from`. Implement [Symbol.iterator] so it yields from `from`
// down to 1 (inclusive), one step at a time, then is done.
// Spread `new Countdown(4)` into an array and print it.
// Expected: [ 4, 3, 2, 1 ]
// Tip: Return an object with a next() returning { value, done } by hand here.

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 3 - A simple generator
// Write a generator function `colors` that yields "red", then "green", then
// "blue". Collect its values into an array via spread and print it.
// Expected: [ 'red', 'green', 'blue' ]

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 4 - Step a generator manually
// Reuse the `colors` generator from Task 3. Get its iterator, then call next()
// three times and print each returned result object, then call next() once more
// and print that final result too.
// Expected: { value: 'red', done: false }
// Expected: { value: 'green', done: false }
// Expected: { value: 'blue', done: false }
// Expected: { value: undefined, done: true }

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 5 - Delegate with yield*
// Write a generator `mixed` that delegates to `colors` (Task 3) using yield*,
// then delegates to the array [1, 2] using yield*, then yields the number 42.
// Print the spread result as an array.
// Expected: [ 'red', 'green', 'blue', 1, 2, 42 ]

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 6 - Two-way generator with next(value)
// Write a generator `greeter` that first yields the prompt "city?", then
// receives a value back from next() and yields `welcome to <value>`.
// Create the generator, print the first yielded value, then call
// next("Berlin") and print its value.
// Expected: city?
// Expected: welcome to Berlin
// Tip: `const where = yield "city?";` captures what the caller sends in.

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 7 - Lazy pipeline over an infinite source
// Write an infinite generator `naturals` that yields 1, 2, 3, ... forever.
// Write a generic generator `take<T>(source: Iterable<T>, n: number)` that
// yields only the first n items of source. Use them to build the first 4 cubes
// of the natural numbers (n*n*n) WITHOUT materializing the infinite source:
// take 4 from a mapping of naturals to their cubes. Print the result as an array.
// Expected: [ 1, 8, 27, 64 ]
// Tip: You may also write a `map<T, U>(source, fn)` generator like the example.

// TODO: your code here
