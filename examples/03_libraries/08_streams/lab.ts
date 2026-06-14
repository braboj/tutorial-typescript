// LAB - Streams (node:stream)
// ===========================
// Implement each task below so that running this file produces exactly the
// output shown in the `// Expected:` comments. Work top to bottom.
//
//   Run:   npx tsx examples/03_libraries/08_streams/lab.ts
//
// Covered by this chapter: Readable sources, Transform streams, Writable
// sinks, the pipeline helper, and consuming Readables via async iteration.
// See the numbered example files in this folder if you get stuck.

// Hint: you will need these imports.
//   import { Readable, Writable, Transform } from "node:stream";
//   import { pipeline } from "node:stream/promises";

async function main(): Promise<void> {
  // -------------------------------------------------------------------------
  // Task 1 - A Readable from an array
  // Create a Readable source from the array ["red", "green", "blue"] and log it.
  // Tip: Readable.from(...) builds a readable from any iterable.
  // Expected: <ref *1> Readable [ ... ]   (an object, not an error)
  // Note: just confirm it constructs without throwing; the exact dump varies,
  // so instead log the boolean below.
  // Expected: source ok: true

  // TODO: your code here — build `colors` then log "source ok:", colors instanceof Readable

  // -------------------------------------------------------------------------
  // Task 2 - Consume a Readable with async iteration
  // Iterate over a Readable built from [5, 10, 15, 20] and collect the values
  // into an array, then log that array.
  // Tip: `for await (const item of readable) { ... }`
  // Expected: [ 5, 10, 15, 20 ]

  // TODO: your code here

  // -------------------------------------------------------------------------
  // Task 3 - Sum via async iteration
  // Iterate over a Readable built from [2, 4, 6, 8, 10] and accumulate a total.
  // Log the result in the form shown.
  // Expected: total: 30

  // TODO: your code here

  // -------------------------------------------------------------------------
  // Task 4 - A Transform that doubles numbers
  // Build a Transform (objectMode) that takes each number chunk and pushes
  // back the number multiplied by 2. Then run a pipeline:
  //   Readable.from([1, 2, 3]) -> doubler -> a Writable that collects results.
  // Log the collected array.
  // Tip: in the transform callback, call callback(null, chunk * 2).
  // Expected: [ 2, 4, 6 ]

  // TODO: your code here

  // -------------------------------------------------------------------------
  // Task 5 - A Transform that reverses strings
  // Build a Transform (objectMode) that reverses each string chunk, wire a
  // pipeline from Readable.from(["abc", "xy", "hello"]) through it into a
  // collecting Writable, and log the collected array.
  // Tip: reverse a string with chunk.split("").reverse().join("").
  // Expected: [ 'cba', 'yx', 'olleh' ]

  // TODO: your code here

  // -------------------------------------------------------------------------
  // Task 6 - Two transforms in one pipeline
  // Wire a pipeline that takes words ["cat", "dog", "owl"], runs them through
  // an upper-casing Transform AND a Transform that appends "!", into a
  // collecting Writable. Order: source -> upper -> bang -> sink.
  // Log the collected array.
  // Expected: [ 'CAT!', 'DOG!', 'OWL!' ]

  // TODO: your code here
}

main();
