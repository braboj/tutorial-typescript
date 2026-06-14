// LAB - Comments
// ==============
// Implement each task below so that running this file produces exactly the
// output shown in the `// Expected:` comments. Work top to bottom.
//
//   Run:   npx tsx examples/01_language/03_comments/lab.ts
//
// Covered by this chapter: single-line comments, block comments, trailing
// comments, directive comments (@ts-expect-error, @ts-ignore), and TSDoc
// (/** ... */) with @param/@returns/@example tags.
// See the numbered example files in this folder if you get stuck.

// ---------------------------------------------------------------------------
// Task 1 - Single-line comment
// Declare a const `discount` set to 0.25, with a single-line comment after it
// explaining what it represents. Then print the value.
// Expected: 0.25

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 2 - Block comment
// Write a multi-line block comment (/* ... */) above the next statement that
// briefly explains what the program section does. Then declare a const
// `appName` set to "Inventory" and print it.
// Expected: Inventory

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 3 - Trailing comment
// Declare a const `shippingFee` set to 4.99 with a trailing comment on the
// same line noting it is in euros. Print its type using `typeof`.
// Expected: number

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 4 - @ts-expect-error directive
// Assign a string literal to a const `count` that is typed as `number`, but
// use the @ts-expect-error directive so the file still type-checks. Then print
// the runtime typeof of `count`.
// Tip: place the directive comment on the line directly above the bad line.
// Expected: string

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 5 - TSDoc on a function
// Write a function `perimeter(side: number): number` that returns the
// perimeter of a square (side * 4). Document it with a TSDoc (/** ... */)
// comment that includes a @param tag and a @returns tag. Then print
// perimeter(5).
// Expected: 20

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 6 - TSDoc on an interface
// Define an interface `Color` with two `readonly` properties: `name` (string)
// and `hex` (string). Add a TSDoc summary above the interface and a /** ... */
// doc comment on each property. Create a const of that type for the color
// white (#FFFFFF) and print it.
// Expected: { name: 'white', hex: '#FFFFFF' }

// TODO: your code here
