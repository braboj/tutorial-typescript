// String Basics
// -------------
// Strings can use single or double quotes (no semantic difference). Pick one
// style and be consistent. Strings are immutable: methods return new strings.

const single = "hello";
const double = "world";
// -> hello world
console.log(single + " " + double);

// Escapes. Prints "line1" then "line2" on separate lines:
console.log("line1\nline2");
// -> tab	here
console.log("tab\there");
// -> quote: "quoted"
console.log('quote: "quoted"');

// Length and indexing:
const word = "TypeScript";
console.log(word.length); // -> 10
console.log(word[0]); // -> T
console.log(word.charAt(4)); // -> S

// Strings are immutable - this does nothing to `word` -> TypeScript TYPESCRIPT
const upper = word.toUpperCase();
console.log(word, upper);
