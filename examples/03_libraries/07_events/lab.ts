// LAB - Events (node:events)
// ===========================
// Implement each task below so that running this file produces exactly the
// output shown in the `// Expected:` comments. Work top to bottom.
//
//   Run:   npx tsx examples/03_libraries/07_events/lab.ts
//
// Covered by this chapter: EventEmitter, registering listeners with on(),
// one-shot listeners with once(), emitting events with emit(), a TYPED
// EventEmitter wrapper, and counting listeners with listenerCount().
// See the numbered example files in this folder if you get stuck.

// ---------------------------------------------------------------------------
// Task 1 - Create an emitter and listen with on()
// Import EventEmitter from "node:events" and create a plain emitter named
// `chat`. Register a listener for the "message" event that prints the text
// it receives. Then emit "message" twice with "hi" and "bye".
// Expected: msg: hi
// Expected: msg: bye

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 2 - once() fires only the first time
// On the same `chat` emitter, register a once() listener for the "open"
// event that prints "connection opened". Emit "open" twice.
// Expected: connection opened

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 3 - Count listeners
// Register a SECOND on() listener for "message" that prints "logged". Then
// print how many listeners are now registered for "message" using
// listenerCount().
// Tip: listenerCount returns a number; build the string with concatenation.
// Expected: message listeners: 2

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 4 - A typed event map
// Define a type `OrderEvents` describing two events and their argument tuples:
//   created  -> carries an order id (string)
//   shipped  -> carries an order id (string) and a carrier name (string)
// This is just a type declaration, so it prints nothing on its own.
// Expected: (no output)

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 5 - A typed EventEmitter wrapper
// Write a generic class `Bus<T extends Record<string, unknown[]>>` that
// extends EventEmitter and overrides on() and emit() so that the event name
// and argument types are checked against T (mirror the wrapper in the
// example file). Construct a `Bus<OrderEvents>` named `orders` and register a
// typed listener for "created" that prints the order id.
// Then emit "created" with "A-100".
// Expected: order created: A-100

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 6 - Emit the multi-argument typed event
// On the same `orders` bus, register a listener for "shipped" that prints the
// id and carrier. Emit "shipped" with "A-100" and "DHL".
// Expected: A-100 shipped via DHL

// TODO: your code here
