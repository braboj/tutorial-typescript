// LAB - Modules
// =============
// Implement each task below so that running this file produces exactly the
// output shown in the `// Expected:` comments. Work top to bottom.
//
//   Run:   npx tsx examples/01_language/11_modules/lab.ts
//
// Covered by this chapter: named imports, `import type`, renaming with `as`,
// namespace imports (`import * as`), default imports, re-export/barrel modules.
// You will import from the chapter's existing modules: ./math-utils.js,
// ./logger.js, and the barrel ./shapes.js.
// See the numbered example files in this folder if you get stuck.

// ---------------------------------------------------------------------------
// Task 1 - Named import
// Import the named export `add` from "./math-utils.js" and print the sum of
// 7 and 8.
// Expected: 15
// Tip: named exports go inside { } in the import statement.

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 2 - Importing a constant
// Import the named export `PI` from "./math-utils.js" and print it.
// Expected: 3.14159

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 3 - Import type + a function
// Import the TYPE `Vector2` (use `import type`) and the function `magnitude`
// from "./math-utils.js". Declare a Vector2 with x = 8 and y = 6, then print
// its magnitude.
// Expected: 10
// Tip: under verbatimModuleSyntax a type-only import must use `import type`.

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 4 - Rename on import with `as`
// Import `circleArea` from "./math-utils.js" but rename it to `disc` using
// `as`. Print the area of a circle with radius 3, fixed to 2 decimals.
// Expected: 28.27

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 5 - Namespace import
// Import everything from "./math-utils.js" as a namespace object named `M`.
// Print the result of calling its `add` with 100 and 1.
// Expected: 101
// Tip: use `import * as M from ...` then access members with M.member.

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 6 - Default import + named import together
// Import the default export from "./logger.js" naming it `Log`, and also import
// the named export `createConsoleLogger` in the same statement. Create a new
// Log with the prefix "db" and log an "info" message "connected".
// Expected: [db] INFO: connected
// Tip: the default export needs no braces; the named one does.

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 7 - Importing from a barrel module
// Import `rectangleArea` and `Logger` from the barrel "./shapes.js" (NOT from
// the original files). Print the area of a 5 x 6 rectangle, then create a
// Logger with prefix "ui" and log an "error" message "render failed".
// Expected: 30
// Expected: [ui] ERROR: render failed

// TODO: your code here
