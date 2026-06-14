// LAB - Control Flow
// ==================
// Implement each task below so that running this file produces exactly the
// output shown in the `// Expected:` comments. Work top to bottom.
//
//   Run:   npx tsx examples/01_language/07_control_flow/lab.ts
//
// Covered by this chapter: if/else if/else, truthy/falsy, ternary, switch &
// fall-through, discriminated unions, for/while/do...while, break/continue,
// for...of vs for...in, Object.entries, exhaustiveness with `never`.
// See the numbered example files in this folder if you get stuck.

// ---------------------------------------------------------------------------
// Task 1 - Grade with if / else if / else
// Write a function `grade(score: number): string` that returns "fail" for a
// score below 50, "pass" for 50..79, and "distinction" for 80 and above.
// Call it with 42, 65, and 91 and console.log each result on its own line.
// Expected: fail
// Expected: pass
// Expected: distinction

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 2 - Truthy / falsy and a ternary
// Given the value below, use an if/else on the value itself (not on its
// length) to print "no name" when it is falsy, otherwise print "has name".
// Then use a ternary on the number `count` to print "many" when count is
// greater than 10, else "few".
const name = "";
const count = 3;
// Expected: no name
// Expected: few

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 3 - switch with fall-through
// Write `season(month: string): string`. "Dec", "Jan", "Feb" all return
// "winter" (share one case body via fall-through). "Jun" returns "summer".
// Anything else returns "other". Call it with "Jan", "Jun", and "Apr".
// Expected: winter
// Expected: summer
// Expected: other

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 4 - Loops: sum of multiples
// Using a classic for loop, add up every multiple of 3 from 1 to 20 inclusive
// (3 + 6 + 9 + 12 + 15 + 18) and print the total.
// Tip: use the modulo operator `%` to test divisibility.
// Expected: 63

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 5 - break and continue
// Loop i from 0 to 19. Skip odd numbers with `continue`, and stop the loop
// with `break` once i is greater than 12. Collect the kept values into an
// array and print it.
// Expected: [ 0, 2, 4, 6, 8, 10, 12 ]

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 6 - for...of with entries(), then Object.entries
// Given the array `fruits`, use for...of with .entries() to print one
// "index: fruit" line per item. Then, given the object `prices`, use
// Object.entries to print one "key = value" line per property.
const fruits = ["apple", "pear"];
const prices = { pen: 2, book: 9 };
// Expected: 0: apple
// Expected: 1: pear
// Expected: pen = 2
// Expected: book = 9

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 7 - Exhaustiveness with `never`
// Define a discriminated union for payment methods and handle every case so
// the compiler enforces exhaustiveness:
//   type Payment = { kind: "cash" } | { kind: "card"; last4: string };
// Write `describe(p: Payment): string` using a switch on `p.kind`. Return
// "paid in cash" for cash and `card ending ${p.last4}` for card. In the
// default branch, call an `assertNever(x: never): never` helper that throws.
// Call describe with a cash payment and a card ending "4242".
// Expected: paid in cash
// Expected: card ending 4242

// TODO: your code here
