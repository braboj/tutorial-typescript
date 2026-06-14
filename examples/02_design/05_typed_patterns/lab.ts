// LAB - Typed Patterns
// ====================
// Implement each task below so that running this file produces exactly the
// output shown in the `// Expected:` comments. Work top to bottom.
//
//   Run:   npx tsx examples/02_design/05_typed_patterns/lab.ts
//
// Covered by this chapter: type-state, type-safe builder, generic repository,
// discriminated-union state machines, and typed pipelines.
// See the numbered example files in this folder if you get stuck.

// ---------------------------------------------------------------------------
// Task 1 - Generic repository
// Write a generic class `Store<T extends { id: number }>` with:
//   - save(item: T): void   (keep items in a Map keyed by id)
//   - find(id: number): T | undefined
//   - size(): number
// Create a Store for { id: number; title: string }, save two items, then print
// the title of id 1 and the size.
// Expected: Hello
// Expected: 2
// Tip: back it with `new Map<number, T>()`.

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 2 - Discriminated-union state machine
// Model a toggle as `type Light = { on: true } | { on: false }` and events
// `type Action = { type: "toggle" } | { type: "off" }`. Write
// `next(state: Light, action: Action): Light` where "toggle" flips `on` and
// "off" forces it false. Start from { on: false }, apply "toggle", print the
// `on` value, then apply "off" and print it again.
// Expected: true
// Expected: false

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 3 - Exhaustiveness guard
// Define `type Coin = "heads" | "tails"`. Write `flip(c: Coin): string` using a
// switch that returns "H" or "T", with a `default` branch that calls a helper
// `assertNever(x: never): never` (which throws). Print flip("heads") and
// flip("tails").
// Expected: H
// Expected: T
// Tip: the default branch proves you handled every Coin.

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 4 - Typed pipe (2 stages)
// Write `pipe2<A, B, C>(a: A, ab: (a: A) => B, bc: (b: B) => C): C` that applies
// ab then bc. Use it on the number 5 with a step that adds 1 and a step that
// turns the number into the string `n=<value>`. Print the result.
// Expected: n=6
// Tip: return bc(ab(a)).

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 5 - Type-state (BONUS)
// Build a `Lamp<S extends "off" | "on">` whose private constructor stores the
// state. A static `off()` returns Lamp<"off">. `turnOn(this: Lamp<"off">)`
// returns Lamp<"on"> and logs "on"; `turnOff(this: Lamp<"on">)` returns
// Lamp<"off"> and logs "off". Start off, turn on, then turn off.
// Expected: on
// Expected: off
// Tip: gate each method with a typed `this` parameter, like the Door example.

// TODO: your code here
