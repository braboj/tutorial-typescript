// Printing Output (console)
// -------------------------
// Where Python has print(), JS/TS has the `console` object. console.log is the
// everyday tool; a few siblings are worth knowing.

// Multiple arguments are printed space-separated -> a b 1 true
console.log("a", "b", 1, true);

// Objects and arrays are pretty-printed, no manual stringifying needed
// -> { x: 1, y: [ 2, 3 ] }
console.log({ x: 1, y: [2, 3] });

// Template literals are the cleanest way to build a message -> hello, Ada
const name = "Ada";
console.log(`hello, ${name}`);

// printf-style format specifiers also work:
// %s string, %d integer, %f float, %o object -> age is 30
console.log("%s is %d", "age", 30);

// process.stdout.write does NOT add a newline - useful for progress bars or
// building a line piece by piece -> nonewline
process.stdout.write("no");
process.stdout.write("newline\n");

// console.error and console.warn write to STDERR (not stdout). Use them for
// diagnostics so real output and logs can be separated:
console.error("this goes to stderr, not stdout");

// console.table renders arrays/objects as an ASCII table - handy when
// debugging. Prints a 2-column id/name table for Ada and Linus:
console.table([
  { id: 1, name: "Ada" },
  { id: 2, name: "Linus" },
]);
