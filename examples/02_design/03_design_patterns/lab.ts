// LAB - Design Patterns
// =====================
// Implement each task below so that running this file produces exactly the
// output shown in the `// Expected:` comments. Work top to bottom.
//
//   Run:   npx tsx examples/02_design/03_design_patterns/lab.ts
//
// Covered by this chapter: singleton, factory, builder, adapter, decorator,
// strategy, observer, command.
// See the numbered example files in this folder if you get stuck.

// ---------------------------------------------------------------------------
// Task 1 - Singleton
// Build a `Counter` class with a private constructor and a static
// `getInstance()` that lazily creates and returns the one shared instance.
// Give it an `increment()` method and a `value` you can read.
// Call getInstance() twice, increment via each handle, then print the value
// and whether both handles are the same object.
// Tip: a private static field of type `Counter | undefined` holds the instance.
// Expected: 2
// Expected: true

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 2 - Factory
// Define a `Shape` interface with `area(): number`. Implement `Square` (side)
// and `Circle` (radius). Write a `createShape(kind, size)` factory that returns
// the right Shape for kind "square" or "circle".
// Print the area of a square with side 4, then a circle with radius 1
// rounded to 2 decimals.
// Tip: circle area is Math.PI * r * r; use .toFixed(2) for the circle.
// Expected: 16
// Expected: 3.14

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 3 - Builder
// Create a `PizzaBuilder` with chainable methods: `setSize(size)`,
// `addTopping(name)` (callable multiple times), and `build()`.
// build() returns an object { size, toppings } and should throw if size was
// never set. Build a "large" pizza with toppings "ham" and "olives".
// Print the size, then the toppings joined by ", ".
// Tip: each setter returns `this`; keep toppings in an array.
// Expected: large
// Expected: ham, olives

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 4 - Adapter
// Your app expects a `Notifier` interface with `send(message: string): void`.
// A third-party `LegacyMailer` only offers `deliver(to: string, subject: string)`.
// Write a `MailerAdapter` implementing Notifier that translates send(msg) into
// deliver("inbox", msg). Have LegacyMailer.deliver print: `MAIL[inbox]: <subject>`.
// Pass the adapter to a function that calls notifier.send("welcome aboard").
// Expected: MAIL[inbox]: welcome aboard

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 5 - Decorator
// Define a `Message` interface with `text(): string`. Base class `Plain`
// returns a fixed string. Write two decorators sharing the interface:
// `Exclaim` (appends "!") and `Shout` (uppercases the wrapped text).
// Wrap a Plain message saying "hello" first with Exclaim, then with Shout,
// and print the result.
// Tip: each decorator stores an inner Message and calls inner.text().
// Expected: HELLO!

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 6 - Strategy
// A discount is a function `(price: number) => number`. Define two strategies:
// `noDiscount` (returns price unchanged) and `tenPercentOff` (90% of price).
// Make a `Checkout` context configured with a strategy and a `total(price)`
// method that applies it. Total a price of 100 with noDiscount, then switch
// to tenPercentOff and total 100 again.
// Expected: 100
// Expected: 90

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 7 - Observer
// Build a generic `EventChannel` whose `subscribe(fn)` registers a listener and
// returns an unsubscribe function, and whose `emit(value)` calls every listener.
// Subscribe a listener that prints `Got: <value>`, keeping its unsubscribe.
// Emit 1, then unsubscribe, then emit 2 (which must print nothing).
// Tip: store listeners in a Set; unsubscribe deletes from it.
// Expected: Got: 1

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 8 - Command
// Model a `Counter` receiver with a number `count`. Define a Command interface
// with execute()/undo(). Write `IncrementCommand` that adds a given amount on
// execute and subtracts it on undo. An `Invoker` runs commands and keeps a
// history so undo() reverts the last one.
// Run +5 then +3, print the count, undo once, print again.
// Expected: 8
// Expected: 5

// TODO: your code here
