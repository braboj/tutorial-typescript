// LAB - Logging
// =============
// Implement each task below so that running this file produces exactly the
// output shown in the `// Expected:` comments. Work top to bottom.
//
//   Run:   npx tsx examples/03_libraries/01_logging/lab.ts
//
// Covered by this chapter: log levels, level ordering, threshold filtering,
// structured (JSON) log output, attaching metadata to entries.
// See the numbered example files in this folder if you get stuck.

// ---------------------------------------------------------------------------
// Task 1 - Level ordering map
// Define a type `Level` as the union "trace" | "info" | "alert", and a
// constant `RANK: Record<Level, number>` mapping them to 0, 1 and 2.
// Print the rank of "alert".
// Expected: 2

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 2 - One structured entry
// Build an object with a `level` of "info" and a `msg` of "cache warmed",
// then print it as a single JSON string with JSON.stringify.
// Tip: JSON.stringify turns the object into one line of text.
// Expected: {"level":"info","msg":"cache warmed"}

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 3 - Entry with metadata
// Build an entry with level "alert" and msg "quota exceeded", then merge in
// extra metadata fields `user` = "ada" and `limit` = 100 using the spread
// operator, and print it as JSON.
// Expected: {"level":"alert","msg":"quota exceeded","user":"ada","limit":100}

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 4 - Filter below threshold
// Given the threshold below, write a function `shouldLog(level)` that returns
// true only when the level's RANK is at least the threshold's RANK.
// Print the result for "trace" and then for "alert", each on its own line.
// Expected: false
// Expected: true
const threshold: "trace" | "info" | "alert" = "info";

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 5 - A tiny leveled logger
// Write a function `emit(level, msg)` that prints the JSON entry ONLY when
// shouldLog(level) is true (reuse Task 4's threshold of "info").
// Then call it with: ("trace", "verbose details"), ("info", "request handled"),
// ("alert", "disk almost full").
// The "trace" call must print nothing because it is below the threshold.
// Expected: {"level":"info","msg":"request handled"}
// Expected: {"level":"alert","msg":"disk almost full"}

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 6 - Error level goes to stderr
// Many loggers send error-class logs to stderr instead of stdout. Print a JSON
// entry with level "alert" and msg "service down" using console.error.
// Expected (on stderr): {"level":"alert","msg":"service down"}

// TODO: your code here
