// keyof, typeof, and Indexed Access Types
// ---------------------------------------
// Before conditional and mapped types make sense, you need the three operators
// that let TYPES refer to other types: `keyof`, type-level `typeof`, and indexed
// access `T[K]`. Difficult TypeScript code is built almost entirely out of these.

// `keyof T` is the UNION of T's property keys, as literal string types.
interface User {
  id: number;
  name: string;
  active: boolean;
}
type UserKey = keyof User; // "id" | "name" | "active"
const k: UserKey = "name";
console.log(k); // -> name

// Type-level `typeof` turns a VALUE into its type. Pair it with `keyof` to derive
// types from a runtime object (a config, a lookup table) - one source of truth,
// no separate interface to keep in sync.
const config = { host: "localhost", port: 8080, tls: false };
type Config = typeof config; // { host: string; port: number; tls: boolean }
type ConfigKey = keyof typeof config; // "host" | "port" | "tls"
const ck: ConfigKey = "port";
console.log(ck); // -> port

// Indexed access `T[K]` looks up the TYPE of a property - like indexing a value,
// but in the type system.
type Port = Config["port"]; // number
const p: Port = 8080;
console.log(p); // -> 8080

// Index with a UNION of keys to get a union of the value types.
type HostOrPort = Config["host" | "port"]; // string | number
const hp: HostOrPort = 8080;
console.log(hp); // -> 8080

// `T[number]` is the special move: the ELEMENT type of an array or tuple.
const palette = ["red", "green", "blue"] as const;
type Color = (typeof palette)[number]; // "red" | "green" | "blue"
const c: Color = "green";
console.log(c); // -> green

// Putting it together: a fully type-safe getter whose return type is EXACTLY the
// looked-up property type - `getProp(config, "port")` is typed `number`.
function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
console.log(getProp(config, "host")); // -> localhost
