// LAB - OOP Basics
// ================
// Implement each task below so that running this file produces exactly the
// output shown in the `// Expected:` comments. Work top to bottom.
//
//   Run:   npx tsx examples/02_design/01_oop_basics/lab.ts
//
// Covered by this chapter: encapsulation (hiding state + protecting invariants),
// abstraction (a clean interface over complex internals), inheritance ("is-a"
// with abstract base + protected members), polymorphism (one interface, many
// implementations / dynamic dispatch), and composition over inheritance.
// See the numbered example files in this folder if you get stuck.

// ---------------------------------------------------------------------------
// Task 1 - Encapsulation: protect an invariant
// Define a class `Thermostat` with a truly-private field holding a temperature
// (start it at 20). Add a method `set(target: number)` that rejects anything
// below 5 or above 30 by throwing an Error with message "out of range", and a
// read-only getter `current`. Create one, set it to 22, print `current`, then
// try to set it to 99 inside a try/catch and print the caught error message.
// Expected: 22
// Expected: out of range
// Tip: use a `#field` for true privacy and a `get current()` accessor.

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 2 - Abstraction: depend on an interface, not a class
// Declare an interface `Logger` with one method `log(line: string): string`.
// Write a class `ConsoleLogger` implementing it that returns `[LOG] ` followed
// by the line. Write a function `report(logger: Logger)` that prints the result
// of `logger.log("started")`. Call `report` with a `ConsoleLogger`.
// Expected: [LOG] started

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 3 - Abstraction: swap in another implementation
// Reusing the `Logger` interface from Task 2, write a second class
// `PrefixLogger` whose `log` returns `>> ` followed by the line. Call the same
// `report` function with a `PrefixLogger` to show callers don't change.
// Expected: >> started

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 4 - Inheritance: abstract base with specialized subclasses
// Create an abstract class `Shape` with a `protected readonly name: string` and
// a concrete method `describe()` returning `<name> has area <area()>`, plus an
// abstract method `area(): number`. Add `Square(side)` and `Rectangle(w, h)`
// subclasses. Put one of each in a `Shape[]` (a 4-side square, a 3x5 rectangle)
// and print each one's `describe()`.
// Expected: square has area 16
// Expected: rectangle has area 15
// Tip: pass the name up via `super(...)`; round is not needed here.

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 5 - Polymorphism: one call, many forms
// Declare an interface `Exporter` with `export(rows: number): string`. Write
// `CsvExporter` (returns `CSV: <rows> rows`) and `JsonExporter` (returns
// `JSON: <rows> rows`). Write a function `runAll(exporters: Exporter[])` that
// prints each one's export of 3 rows. Call it with one of each.
// Expected: CSV: 3 rows
// Expected: JSON: 3 rows

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 6 - Composition over inheritance
// Define an interface `Engine` with `start(): string`. Make two plain objects:
// `petrolEngine` (returns "vroom") and `electricMotor` (returns "hum"). Write a
// class `Car` that is COMPOSED of an `Engine` injected in its constructor and
// has a `drive()` method returning `driving: <engine.start()>`. Also add a
// `setEngine(e: Engine)` method. Build a car with the petrol engine and print
// `drive()`, then swap in the electric motor and print `drive()` again.
// Expected: driving: vroom
// Expected: driving: hum
// Tip: store the engine in a private field so it can be replaced at runtime.

// TODO: your code here
