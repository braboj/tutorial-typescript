// LAB - Serialization
// ====================
// Implement each task below so that running this file produces exactly the
// output shown in the `// Expected:` comments. Work top to bottom.
//
//   Run:   npx tsx examples/03_libraries/03_serialization/lab.ts
//
// Covered by this chapter: JSON.stringify, pretty-printing, JSON.parse with a
// type assertion, JSON gotchas (Dates become strings), reviver functions.
// See the numbered example files in this folder if you get stuck.

// ---------------------------------------------------------------------------
// Task 1 - Serialize an object
// A `Book` interface and a `book` value are given below.
// Convert `book` to a compact JSON string and print it.
// Expected: {"id":7,"title":"Dune","read":true,"genres":["scifi"]}

interface Book {
  id: number;
  title: string;
  read: boolean;
  genres: string[];
}

const book: Book = { id: 7, title: "Dune", read: true, genres: ["scifi"] };

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 2 - Pretty-print
// Serialize the object { x: 10 } with 2-space indentation and print it.
// Expected (3 lines):
// Expected: {
// Expected:   "x": 10
// Expected: }
// Tip: JSON.stringify takes a replacer and a space argument.

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 3 - Deserialize and read a field
// A JSON string is given below. Parse it back into an object, asserting it
// has the `Book` shape, then print the title.
// Expected: 1984

const stored = '{"id":3,"title":"1984","read":false,"genres":["dystopia"]}';

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 4 - Dates become strings
// Serialize the object { created: new Date("2030-05-15T00:00:00Z") } and
// print the resulting string. Notice the Date turns into an ISO string.
// Expected: {"created":"2030-05-15T00:00:00.000Z"}

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 5 - Revive a Date with a reviver
// A JSON string holding an ISO date under the key "created" is given below.
// Parse it using a reviver function that turns the "created" string value
// back into a real Date object. Print whether the revived value is a Date.
// Expected: true
// Tip: the reviver receives (key, value); return a new Date when key is
//      "created" and value is a string, otherwise return value unchanged.

const payload = '{"created":"2030-05-15T00:00:00.000Z"}';

// TODO: your code here
