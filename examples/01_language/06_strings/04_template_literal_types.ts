// Template Literal Types
// ----------------------
// A TYPE-LEVEL feature (not to be confused with template literal *values*).
// You can build string types from other types, enabling precise APIs.

type Lang = "en" | "de";
type Greeting = `hello_${Lang}`; // "hello_en" | "hello_de"

const g: Greeting = "hello_de";
console.log(g); // -> hello_de
// const bad: Greeting = "hello_fr"; // Error: not assignable

// Combine with unions to generate every combination:
type Size = "sm" | "lg";
type Variant = "primary" | "ghost";
type ClassName = `${Variant}-${Size}`; // 4 combinations
const cls: ClassName = "primary-lg";
console.log(cls); // -> primary-lg

// Built-in intrinsic string types: Uppercase, Lowercase, Capitalize,
// Uncapitalize.
type Loud = Uppercase<"hello">; // "HELLO"
const shout: Loud = "HELLO";
console.log(shout); // -> HELLO

// A practical pattern: typed event names.
type Entity = "user" | "order";
type Event = `${Entity}:created` | `${Entity}:deleted`;
const evt: Event = "order:created";
console.log(evt); // -> order:created
