// Generic Constraints
// -------------------
// `extends` constrains a type parameter, guaranteeing it has certain members so
// you can use them safely inside the function.

// T must have a `.length` property -> apple
function longest<T extends { length: number }>(a: T, b: T): T {
  return a.length >= b.length ? a : b;
}
console.log(longest("apple", "kiwi"));
// -> [ 1, 2, 3 ]
console.log(longest([1, 2], [1, 2, 3]));
// longest(3, 5);     // Error: number has no 'length' property.

// `keyof` constrains a parameter to the keys of another type. This is the
// classic type-safe property getter:
function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
const user = { name: "Ada", age: 36 };
const name = getProp(user, "name"); // typed as string
const age = getProp(user, "age"); // typed as number
// -> Ada 36
console.log(name, age);
// getProp(user, "email"); // Error: "email" is not a key of user.

// Default type parameters -> [ 'x', 'x', 'x' ]
function createArray<T = string>(length: number, fill: T): T[] {
  return Array<T>(length).fill(fill);
}
console.log(createArray(3, "x"));
