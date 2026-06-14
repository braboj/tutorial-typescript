// Regular Expressions
// -------------------
// Regex describes text patterns for searching, validating, and replacing. In
// JS/TS you write them as /pattern/flags literals or new RegExp("pattern").

// test(): does the string match? Returns boolean.
// -> true
// -> false
const isHex = /^#[0-9a-f]{6}$/i; // ^ start, $ end, i = case-insensitive
console.log(isHex.test("#A1B2C3"));
console.log(isHex.test("#zzz"));

// match() with capture groups - parentheses extract sub-parts.
const date = "2024-01-15";
const m = date.match(/^(\d{4})-(\d{2})-(\d{2})$/);
// -> 2024 01 15
console.log(m?.[1], m?.[2], m?.[3]);

// NAMED capture groups read better than numeric indexes -> 2024 01
const named = date.match(/(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/);
console.log(named?.groups?.year, named?.groups?.month);

// matchAll() with the global flag finds EVERY match (returns an iterator):
const text = "rgb(255, 128, 0)";
const numbers = [...text.matchAll(/\d+/g)].map((x) => Number(x[0]));
// -> [ 255, 128, 0 ]
console.log(numbers);

// replace() / replaceAll(). A function lets you compute each replacement.
// -> hell0 w0rld
console.log("hello world".replace(/o/g, "0"));
const title = "the lord of the rings".replace(/\b\w/g, (c) => c.toUpperCase());
// -> The Lord Of The Rings
console.log(title);

// Backreferences inside replacement use $1, $<name>, etc -> 15/01/2024
console.log("2024-01-15".replace(/(\d{4})-(\d{2})-(\d{2})/, "$3/$2/$1"));

// split() can split on a pattern, not just a fixed string:
// -> [ 'a', 'b', 'c', '' ]
console.log("a1b2c3".split(/\d/));

// Common flags: g (global), i (ignore case), m (multiline), s (dotall), u
// (unicode).
// Tip: escape user input before putting it in a RegExp, or use plain string
// methods (includes/startsWith) when you don't actually need a pattern.
