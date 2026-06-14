// Events (node:events)
// --------------------
// EventEmitter is the backbone of Node's event-driven APIs (servers, streams,
// processes). You emit named events and register listeners for them. Plain
// EventEmitter is untyped, so below we add a small TYPED wrapper - a very
// common
// TypeScript pattern.

import { EventEmitter } from "node:events";

// Describe each event name and the argument tuple it carries:
type AppEvents = {
  login: [user: string];
  logout: [user: string, reason: string];
};

// A thin generic wrapper that makes on()/emit()/once() type-safe.
class TypedEmitter<T extends Record<string, unknown[]>> extends EventEmitter {
  override on<K extends keyof T & string>(
    event: K,
    listener: (...args: T[K]) => void,
  ): this {
    return super.on(event, listener as (...args: unknown[]) => void);
  }
  override once<K extends keyof T & string>(
    event: K,
    listener: (...args: T[K]) => void,
  ): this {
    return super.once(event, listener as (...args: unknown[]) => void);
  }
  override emit<K extends keyof T & string>(event: K, ...args: T[K]): boolean {
    return super.emit(event, ...args);
  }
}

const bus = new TypedEmitter<AppEvents>();

// on(): fires every time the event is emitted.
bus.on("login", (user) => console.log(`${user} logged in`));

// once(): fires only the first time, then auto-removes itself.
bus.once("logout", (user, reason) => console.log(`${user} left: ${reason}`));

// -> ada logged in
bus.emit("login", "ada");
// -> linus logged in
bus.emit("login", "linus");
// -> ada left: idle
bus.emit("logout", "ada", "idle");
// -> (nothing - once() already fired)
bus.emit("logout", "ada", "again");

// The arguments are fully checked: bus.emit("login", 123) would be a type
// error.
// -> listeners for login: 1
console.log("listeners for login:", bus.listenerCount("login"));
