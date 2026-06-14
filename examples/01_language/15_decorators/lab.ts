// LAB - Decorators
// ================
// Implement each task below so that running this file produces exactly the
// output shown in the `// Expected:` comments. Work top to bottom.
//
//   Run:   npx tsx examples/01_language/15_decorators/lab.ts
//
// Covered by this chapter: standard (TC39 / TS 5) decorators - method
// decorators, decorator factories, addInitializer / auto-binding, class
// decorators, field decorators, and accessor decorators.
// See the numbered example files in this folder if you get stuck.

// ---------------------------------------------------------------------------
// Task 1 - A method decorator that traces calls
// Write a method decorator named `trace`. It should REPLACE the method with a
// wrapper that prints "-> <methodName>" before calling the original, then
// returns the original's result. Apply it to a `greet(name: string)` method on
// a `Greeter` class that returns `"Hi, " + name`.
// Then call and print: console.log(new Greeter().greet("Sam"))
// Expected: -> greet
// Expected: Hi, Sam
// Tip: read context.name with String(context.name) to get the method name.

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 2 - A decorator FACTORY that repeats output
// Write a decorator factory `repeat(times: number)` that returns a method
// decorator. The wrapper should call the original method `times` times and
// return the value from the LAST call. Apply `@repeat(3)` to a method
// `ping()` on a `Pinger` class that increments and returns an instance counter
// (starting at 0). Print the result of one decorated call.
// Expected: 3
// Tip: a factory is a function that returns the actual decorator function.

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 3 - Auto-binding with addInitializer
// Write a method decorator `autobind` that uses context.addInitializer to bind
// the method to each instance (so it keeps `this` when detached). Apply it to
// `label()` on a `Tag` class that has `text = "alpha"` and returns this.text.
// Detach the method (const fn = new Tag().label) and print fn().
// Expected: alpha
// Tip: inside addInitializer, assign the bound function onto `this`.

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 4 - A class decorator that records the class name
// Keep a module-level `const seen: string[] = []`. Write a class decorator
// `track` that pushes the class's context.name into `seen` and returns the
// class unchanged. Apply `@track` to a class `Widget`. After defining it,
// print the contents of `seen` joined by a comma.
// Expected: Widget
// Tip: a class decorator receives (value, context); context.name is the name.

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 5 - A field decorator that transforms the initial value
// Write a field decorator `double` that returns an initializer transforming a
// numeric initial value to twice its value. Apply it to a field `qty = 21` on
// a class `Order`. Print new Order().qty.
// Expected: 42
// Tip: a field decorator returns (initial) => transformed.

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 6 - An accessor decorator that enforces non-negative values
// Write an accessor decorator `nonNegative` that wraps the auto get/set of an
// `accessor` field so any value below 0 is stored as 0. Apply it to
// `accessor balance = 10` on a class `Account`. Create an instance, set
// balance to -5, then print balance.
// Expected: 0
// Tip: return an object with get/set that calls target.get / target.set.

// TODO: your code here
