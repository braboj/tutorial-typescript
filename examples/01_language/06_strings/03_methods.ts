// Common String Methods
// ---------------------
const s = "  The quick brown fox  ";

console.log(s.trim()); // -> The quick brown fox
console.log(s.trim().toUpperCase()); // -> THE QUICK BROWN FOX
console.log(s.includes("quick")); // -> true
console.log(s.indexOf("brown")); // -> 12
console.log("fox".startsWith("fo")); // -> true
console.log("fox".endsWith("ox")); // -> true

// Replace (replaceAll for every occurrence):
console.log("a-b-c".replace("-", "+")); // -> a+b-c
console.log("a-b-c".replaceAll("-", "+")); // -> a+b+c

// Split and join:
const parts = "2024-01-15".split("-");
console.log(parts); // -> [ '2024', '01', '15' ]
console.log(parts.join("/")); // -> 2024/01/15

// Slice / substring / pad / repeat:
console.log("TypeScript".slice(0, 4)); // -> Type
console.log("TypeScript".slice(-6)); // -> Script
console.log("7".padStart(3, "0")); // -> 007
console.log("ab".repeat(3)); // -> ababab

// Convert numbers <-> strings:
console.log(Number("42") + 1); // -> 43
console.log((255).toString(16)); // -> ff
