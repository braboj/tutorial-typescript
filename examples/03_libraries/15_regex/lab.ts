// LAB - Regular Expressions
// ==========================
// Implement each task below so that running this file produces exactly the
// output shown in the `// Expected:` comments. Work top to bottom.
//
//   Run:   npx tsx examples/03_libraries/15_regex/lab.ts
//
// Covered by this chapter: regex literals, test(), numeric and named capture
// groups, matchAll() with the global flag, replace() with a function and
// backreferences, splitting on a pattern.
// See the numbered example files in this folder if you get stuck.

// ---------------------------------------------------------------------------
// Task 1 - Validate with test()
// Build a regex that matches a US ZIP code: exactly 5 digits, start to end.
// Use it to test the two strings below and print each boolean result.
// Expected: true
// Expected: false
// Tip: anchor both ends with ^ and $, and use \d{5}.

// const zipA = "90210";
// const zipB = "9021";
// TODO: your code here

// ---------------------------------------------------------------------------
// Task 2 - Numeric capture groups
// The string below is a time like "14:30:05". Match it with three capture
// groups (hours, minutes, seconds) and print the three parts separated by
// spaces.
// Expected: 14 30 05

// const time = "14:30:05";
// TODO: your code here

// ---------------------------------------------------------------------------
// Task 3 - Named capture groups
// Match the same time string using NAMED groups called hours and seconds.
// Print the hours value, then the seconds value, separated by a space.
// Expected: 14 05

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 4 - matchAll() with the global flag
// The string below holds a CSS hsl() color. Extract EVERY run of digits as
// numbers and print them as an array.
// Expected: [ 210, 50, 40 ]
// Tip: spread the matchAll iterator into an array, then map each match to Number.

// const color = "hsl(210, 50%, 40%)";
// TODO: your code here

// ---------------------------------------------------------------------------
// Task 5 - replace() with a function
// Take the sentence below and upper-case the FIRST letter of every word.
// Print the result.
// Expected: Quick Brown Fox
// Tip: match \b\w globally and return c.toUpperCase() from the callback.

// const phrase = "quick brown fox";
// TODO: your code here

// ---------------------------------------------------------------------------
// Task 6 - Backreferences in the replacement string
// The string below is a date "2024/06/13" (year/month/day). Use replace() with
// capture groups and a "$..." replacement to reformat it as "13-06-2024".
// Expected: 13-06-2024

// const stamp = "2024/06/13";
// TODO: your code here

// ---------------------------------------------------------------------------
// Task 7 - split() on a pattern
// Split the string below on any run of one or more whitespace characters and
// print the resulting array of words.
// Expected: [ 'one', 'two', 'three' ]
// Tip: \s+ matches one or more whitespace characters.

// const messy = "one   two \t three";
// TODO: your code here
