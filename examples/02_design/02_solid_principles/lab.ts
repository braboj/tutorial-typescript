// LAB - SOLID Principles
// ======================
// Implement each task below so that running this file produces exactly the
// output shown in the `// Expected:` comments. Work top to bottom.
//
//   Run:   npx tsx examples/02_design/02_solid_principles/lab.ts
//
// Covered by this chapter: Single Responsibility (SRP), Open/Closed (OCP),
// Liskov Substitution (LSP), Interface Segregation (ISP), and Dependency
// Inversion (DIP).
// See the numbered example files in this folder if you get stuck.

// ---------------------------------------------------------------------------
// Task 1 - Single Responsibility Principle (SRP)
// Model a blog Article with one job: holding data. Give it a readonly `title`
// (string) and readonly `wordCount` (number). Then write a SEPARATE class
// `ArticleSummary` whose only job is presentation: a `render(article)` method
// returning a string like "Hooks (1200 words)".
// Create an Article titled "Hooks" with 1200 words and print its summary.
// Expected: Hooks (1200 words)
// Tip: Two classes, two reasons to change - data vs. formatting.

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 2 - Open/Closed Principle (OCP)
// Define an interface `Discount` with a method `apply(price: number): number`.
// Implement two discounts WITHOUT any if/switch on a type tag:
//   - `PercentOff` constructed with a percent (e.g. 10 means 10% off)
//   - `FlatOff` constructed with an amount subtracted from the price
// Write a function `finalPrice(price, discounts)` that applies each discount in
// order using reduce. Apply 10% off then $5 off to a price of 100.
// Expected: 85
// Tip: 100 -> 90 (10% off) -> 85 ($5 off). Adding a new discount = new class.

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 3 - Liskov Substitution Principle (LSP)
// A read-only contract avoids the classic Square/Rectangle trap. Define an
// interface `Account` with `balance(): number`. Implement immutable
// `SavingsAccount` (constructed with a starting amount) and `BonusAccount`
// (constructed with an amount; its balance() returns amount plus a fixed 50
// bonus). Put a SavingsAccount(100) and a BonusAccount(100) in an array and
// print the array of their balances.
// Expected: [ 100, 150 ]
// Tip: Any code reading balance() works for either subtype - no surprises.

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 4 - Interface Segregation Principle (ISP)
// Split capabilities into small role interfaces instead of one fat interface.
// Define `Playable` with `play(): string` and `Recordable` with
// `record(): string`. Implement `MusicPlayer` (Playable only) and
// `Studio` (both Playable and Recordable).
// Write a function `start(p: Playable)` that prints the result of p.play().
// Call start with a MusicPlayer (which returns "now playing") and with a
// Studio (which returns "studio playing"). Then print the Studio's record()
// result, which returns "recording".
// Expected: now playing
// Expected: studio playing
// Expected: recording
// Tip: start() depends only on Playable - the narrow capability it needs.

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 5 - Dependency Inversion Principle (DIP)
// High-level code should depend on an abstraction, not a concrete class.
// Define an interface `Logger` with `log(msg: string): void` and `lines(): string[]`.
// Implement `MemoryLogger` that stores messages in an array.
// Write a class `Notifier` whose constructor takes a Logger (injected) and has
// a method `notify(user: string)` that logs "alert: <user>".
// Inject a MemoryLogger, notify "alice" then "bob", and print logger.lines().
// Expected: [ 'alert: alice', 'alert: bob' ]
// Tip: Notifier never names MemoryLogger - swap loggers without touching it.

// TODO: your code here
