// Type Narrowing
// --------------
// When a value has a union type, TypeScript "narrows" it to a more specific
// type
// inside conditional blocks, based on checks you write. This is how you safely
// work with `string | number`, optional values, and unknown data.

function pad(value: string | number): string {
  if (typeof value === "number") {
    // here, value is narrowed to `number`
    return value.toFixed(2);
  }
  // here, value is narrowed to `string`
  return value.trim();
}
// -> 3.00
console.log(pad(3));
// -> hi
console.log(pad("  hi "));

// Truthiness narrowing removes null/undefined:
function shout(msg?: string): string {
  if (!msg) return "(silence)";
  return msg.toUpperCase(); // msg is `string` here
}
// -> (silence)
console.log(shout());
// -> HEY
console.log(shout("hey"));

// `in` operator narrows by property presence:
type Fish = { swim: () => string };
type Bird = { fly: () => string };
function move(animal: Fish | Bird): string {
  return "swim" in animal ? animal.swim() : animal.fly();
}
// -> splash
console.log(move({ swim: () => "splash" }));

// Custom type guards (the `is` keyword) let you name a reusable narrowing:
function isString(x: unknown): x is string {
  return typeof x === "string";
}
const data: unknown = "hello";
if (isString(data)) {
  // -> 5
  console.log(data.length);
}
