// LAB - Data Structures
// =====================
// Implement each task below so that running this file produces exactly the
// output shown in the `// Expected:` comments. Work top to bottom.
//
//   Run:   npx tsx examples/03_libraries/04_data_structures/lab.ts
//
// Covered by this chapter: Map (typed keys/values, get/has/size, iteration),
// Set (unique values, add/has/size), de-duplicating arrays with Set.
// See the numbered example files in this folder if you get stuck.

// ---------------------------------------------------------------------------
// Task 1 - Build a Map of prices
// Create a Map<string, number> called `prices` and add two entries:
// "apple" -> 30 and "banana" -> 20. Then print the price of "apple".
// Expected: 30

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 2 - Membership and size
// Using the `prices` Map from Task 1, print whether the key "cherry" exists,
// then print how many entries the Map holds.
// Expected: false
// Expected: 2

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 3 - Iterate a Map
// Loop over the `prices` Map and print one line per entry in the
// form `<key> = <value>`. Insertion order is preserved.
// Expected: apple = 30
// Expected: banana = 20

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 4 - A Set of unique colors
// Create a Set<string> called `colors` initialized from
// ["red", "green", "red", "blue"]. Then add "green" again.
// Print the size of the Set.
// Tip: Duplicates are ignored, so adding "green" twice changes nothing.
// Expected: 3

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 5 - Inspect the Set
// Using the `colors` Set from Task 4, print whether it contains "blue",
// then print the Set spread into an array.
// Expected: true
// Expected: [ 'red', 'green', 'blue' ]

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 6 - De-duplicate a number array
// Given the array below, produce a new array with duplicates removed
// (order preserved) using a Set, and print it.
const scores = [5, 5, 8, 8, 8, 2, 5];
// Expected: [ 5, 8, 2 ]

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 7 - Count word frequencies with a Map
// Given the words below, build a Map<string, number> counting how many times
// each word appears, then print the count for "go".
const words = ["go", "stop", "go", "go", "stop"];
// Tip: For each word, read the current count (default 0) and set it + 1.
// Expected: 3

// TODO: your code here
