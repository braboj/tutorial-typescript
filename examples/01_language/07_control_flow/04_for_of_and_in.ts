// for...of vs for...in
// --------------------
// for...of iterates VALUES of an iterable (arrays, strings, Maps, Sets).
// for...in iterates KEYS (property names) of an object - rarely what you want
// for arrays.

const colors = ["red", "green", "blue"];

// -> red green blue
for (const color of colors) {
  process.stdout.write(color + " ");
}
console.log();

// Need the index too? Use entries(). Prints one "index: color" line per color
// (0: red, 1: green, 2: blue):
for (const [i, color] of colors.entries()) {
  console.log(`${i}: ${color}`);
}

// for...in over an object's keys:
const scores = { math: 90, science: 85 };
// Prints one "key = value" line per property (math = 90, science = 85):
for (const subject in scores) {
  console.log(`${subject} = ${scores[subject as keyof typeof scores]}`);
}

// Idiomatic object iteration uses Object.entries (typed, no keyof gymnastics).
// Prints one "key: value" line per property (math: 90, science: 85):
for (const [subject, score] of Object.entries(scores)) {
  console.log(`${subject}: ${score}`);
}
