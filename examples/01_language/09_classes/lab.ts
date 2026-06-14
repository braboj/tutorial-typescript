// LAB - Classes
// =============
// Implement each task below so that running this file produces exactly the
// output shown in the `// Expected:` comments. Work top to bottom.
//
//   Run:   npx tsx examples/01_language/09_classes/lab.ts
//
// Covered by this chapter: class basics (fields, constructor, methods), access
// modifiers (public/private/#private), inheritance and super, abstract classes
// and implementing interfaces, getters/setters, static members, parameter
// properties.
// See the numbered example files in this folder if you get stuck.

// ---------------------------------------------------------------------------
// Task 1 - A basic class with a method
// Define a class `Rectangle` with number fields `width` and `height`, a
// constructor that assigns both, and a method `area()` that returns their
// product. Create a 4 x 5 rectangle and print its area.
// Expected: 20

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 2 - Parameter properties
// Rewrite a small class using TypeScript parameter properties (an access
// modifier on each constructor parameter). Define `Book` with `public readonly
// title: string` and `public readonly pages: number` declared entirely in the
// constructor signature (no constructor body). Create a book titled "TS" with
// 300 pages and print its title and pages on one line.
// Expected: TS 300

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 3 - Access modifiers and a #private field
// Define a class `Vault` whose constructor takes a `secret: string`. Store it
// in a true runtime-private `#secret` field. Add a method `reveal(code: string)`
// that returns the secret only when `code === "open"`, otherwise returns the
// string "denied". Create a vault holding "gold" and print reveal("open") then
// reveal("wrong"), each on its own line.
// Expected: gold
// Expected: denied

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 4 - Inheritance and override
// Define a base class `Vehicle` with a parameter property `public name: string`
// and a method `describe()` returning `${this.name} moves`. Define `Car` that
// extends `Vehicle` and overrides `describe()` to return `${this.name} drives`.
// Print describe() for a Vehicle named "Cart" and a Car named "Tesla".
// Tip: use the `override` keyword on the subclass method.
// Expected: Cart moves
// Expected: Tesla drives

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 5 - Abstract class with a shared method
// Define an abstract class `Employee` with a parameter property
// `public name: string`, an abstract method `monthlyPay(): number`, and a
// concrete method `summary()` returning `${this.name} earns ${this.monthlyPay()}`.
// Define `Salaried` extending it: constructor takes a name and a yearly salary,
// and `monthlyPay()` returns the yearly salary divided by 12. Print summary()
// for a Salaried employee "Ada" with a yearly salary of 120000.
// Expected: Ada earns 10000

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 6 - Getters and setters
// Define a class `Box` storing a private `volumeLiters` (default 0). Expose a
// getter/setter pair `liters` over it, and the setter must throw if a negative
// value is assigned. Add a read-only getter `milliliters` that returns liters
// times 1000. Create a box, set liters to 2, then print `liters` and
// `milliliters` on separate lines.
// Expected: 2
// Expected: 2000

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 7 - Static members
// Define a class `Widget` with a parameter property `public label: string`, a
// static counter `created` (starts at 0) incremented in the constructor, and a
// static factory method `blank()` that returns a new Widget with label "blank".
// Create one Widget via `new` (any label) and one via `Widget.blank()`, then
// print `Widget.created`.
// Expected: 2

// TODO: your code here
