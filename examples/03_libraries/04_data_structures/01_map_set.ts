// Data Structures (starter)
// -------------------------
// Beyond arrays and objects, JS/TS ship Map and Set, which are typed nicely in
// TypeScript. This section will also cover stacks, queues, and when to reach
// for
// each. Below: Map and Set essentials.

// Map: keys of ANY type, preserves insertion order, has a real .size.
const ages = new Map<string, number>();
ages.set("Ada", 36);
ages.set("Linus", 54);
// -> 36
console.log(ages.get("Ada"));
// -> false
console.log(ages.has("Grace"));
// -> 2
console.log(ages.size);

// Iterating a Map yields [key, value] pairs. Prints one line per entry: Ada: 36
// then Linus: 54.
for (const [name, age] of ages) {
  console.log(`${name}: ${age}`);
}

// Set: a collection of UNIQUE values - perfect for de-duplication.
const tags = new Set<string>(["ts", "js", "ts"]);
tags.add("node");
// -> 3
console.log(tags.size);
// -> [ 'ts', 'js', 'node' ]
console.log([...tags]);
// -> true
console.log(tags.has("js"));

// De-duplicate an array in one line -> [ 1, 2, 3 ]
const unique = [...new Set([1, 1, 2, 3, 3, 3])];
console.log(unique);

// Prefer Map over a plain object when keys are dynamic, non-string, or you need
// ordering and size. Prefer objects for fixed, known-shape records.
