// LAB - Types and Interfaces
// ==========================
// Implement each task below so that running this file produces exactly the
// output shown in the `// Expected:` comments. Work top to bottom.
//
//   Run:   npx tsx examples/01_language/05_types_and_interfaces/lab.ts
//
// Covered by this chapter: type aliases, interfaces, union & intersection
// types, literal types, enums, type narrowing, type assertions.
// See the numbered example files in this folder if you get stuck.

// ---------------------------------------------------------------------------
// Task 1 - Type aliases
// Declare a type alias `Celsius` for the primitive `number`, and a type alias
// `Point3D` for an object with `x`, `y`, and `z` number fields.
// Create a `Celsius` value of 21 and a `Point3D` of { x: 1, y: 2, z: 3 },
// then log them, the value first and the point second.
// Expected: 21
// Expected: { x: 1, y: 2, z: 3 }

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 2 - Interfaces and extension
// Define an interface `Vehicle` with fields `brand` (string) and
// `wheels` (number), plus a method `describe(): string`.
// Then define `Car` that extends `Vehicle` and adds `doors` (number).
// Create a `Car` for a 4-door "Tesla" with 4 wheels whose `describe()` returns
// the brand, and log the result of calling describe() followed by the doors.
// Expected: Tesla 4

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 3 - Union and intersection types
// Write a function `label(value: string | boolean): string` that returns
// `Value:` followed by the value (e.g. "Value:true").
// Then declare two object types `WithName` ({ name: string }) and
// `WithAge` ({ age: number }), an intersection `Person` of the two, and build
// a person { name: "Ada", age: 36 } and log the whole object.
// Expected: Value:true
// Expected: { name: 'Ada', age: 36 }
// Tip: A boolean interpolated into a template string prints as "true"/"false".

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 4 - Literal types and discriminated unions
// Declare a literal type `TrafficLight` = "red" | "yellow" | "green".
// Then model a discriminated union `Payment` with two members:
//   { method: "cash"; amount: number } and { method: "card"; last4: string }.
// Write `summary(p: Payment): string` that returns "Cash 50" for cash (using
// the amount) or "Card 1234" for card (using last4). Log the cash case for an
// amount of 50.
// Expected: Cash 50

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 5 - Enums
// Define a string enum `Level` with members Low = "LOW", Medium = "MEDIUM",
// High = "HIGH". Write `alert(l: Level): string` that returns "Alert: HIGH"
// style output, and log the result for the High level.
// Expected: Alert: HIGH

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 6 - Type narrowing
// Write `area(input: number | number[]): number`. If the input is a single
// number, treat it as the side of a square and return side * side. If it is an
// array of numbers, return the sum of its elements.
// Use `typeof` (or Array.isArray) to narrow. Log area(4) then area([1, 2, 3]).
// Expected: 16
// Expected: 6

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 7 - Type assertions
// You receive `raw` typed as `unknown` (provided below) holding a JSON string.
// Parse it with JSON.parse and assert the result is a `Settings` shape with
// fields `theme` (string) and `fontSize` (number). Log the theme, then the
// fontSize.
// Expected: dark
// Expected: 14
// Tip: Define an interface `Settings` and use `JSON.parse(...) as Settings`.
const raw: unknown = '{"theme":"dark","fontSize":14}';

// TODO: your code here
