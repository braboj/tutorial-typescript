// Statements
// ----------
// A program is a sequence of STATEMENTS - instructions that perform an action.
// Declarations, assignments, loops, and conditionals are all statements.

let x = 10; // a declaration statement
x = x + 5; // an expression statement (assignment)

if (x > 10) {
  // a control-flow statement, with a block -> big
  console.log("big");
}

// A block { } groups statements and introduces a new scope:
{
  const local = "only visible in here";
  // -> only visible in here
  console.log(local);
}
// console.log(local); // Error: local is not defined out here.

// Semicolons are technically optional thanks to Automatic Semicolon Insertion
// (ASI), but the convention in most TS codebases is to use them. ASI has sharp
// edges - a line starting with ( or [ can glue onto the previous line:
const a = 1;
const b = 2;
// Without the semicolon after `b`, the next line's [ would be read as b[...] -> 1+2
console.log([a, b].join("+"));

// Rule of thumb: write one statement per line and end it with a semicolon, and
// ASI will never surprise you.
