// LAB - Day.js (Dates & Times)
// ============================
// Implement each task below so that running this file produces exactly the
// output shown in the `// Expected:` comments. Work top to bottom.
//
//   Run:   npx tsx examples/03_libraries/13_dayjs/lab.ts
//
// Covered by this chapter: parsing ISO strings with the UTC plugin, formatting
// with tokens, immutable arithmetic (add/subtract), diff between dates,
// comparisons (isBefore/isAfter), and 0-based month accessors.
// See the numbered example files in this folder if you get stuck.

// Hint: at the top of the file you will need:
//   import dayjs from "dayjs";
//   import utc from "dayjs/plugin/utc.js";
//   dayjs.extend(utc);
// Add those imports yourself so the tasks below can use dayjs.utc(...).

// ---------------------------------------------------------------------------
// Task 1 - Parse and format a date
// Parse the ISO string "2025-07-04T18:45:00Z" using dayjs.utc(...) and print
// it in the format "YYYY-MM-DD".
// Expected: 2025-07-04

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 2 - Custom token formatting
// Take the same moment from Task 1 and print it as "DD/MM/YYYY HH:mm".
// Expected: 04/07/2025 18:45

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 3 - Immutable arithmetic
// Starting from "2025-07-04T18:45:00Z", add 10 days and subtract 5 hours,
// then print the result as "YYYY-MM-DD HH:mm".
// Tip: add/subtract return NEW instances; the original is never mutated.
// Expected: 2025-07-14 13:45

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 4 - Original is unchanged
// After the arithmetic in Task 3, print the ORIGINAL moment again as
// "YYYY-MM-DD HH:mm" to prove it was not modified.
// Expected: 2025-07-04 18:45

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 5 - Difference in days
// Compute how many whole days lie between "2025-03-01" and "2025-05-01"
// (both parsed with dayjs.utc). Print the number of days.
// Tip: 2025 is NOT a leap year, so March + April = 31 + 30 = 61.
// Expected: 61

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 6 - Comparison
// Using the two dates from Task 5, print whether the May date is AFTER the
// March date (use isAfter).
// Expected: true

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 7 - Date parts (month is 0-based!)
// For the moment "2025-07-04T18:45:00Z", print the year, the human month
// number (1-12), and the day-of-month separated by single spaces.
// Tip: .month() is 0-based, so add 1 to get the human-friendly month.
// Expected: 2025 7 4

// TODO: your code here
