// `infer` - Extracting Types from Types
// -------------------------------------
// Inside a conditional type's `extends` clause, `infer X` declares a type
// VARIABLE that TypeScript fills in by pattern-matching. It is how you reach
// INSIDE a type and pull a piece out. This is the single hardest TS concept - and
// the engine behind `ReturnType`, `Parameters`, `Awaited`, and most library magic.

// Pull the element type out of an array.
type ElementOf<T> = T extends (infer E)[] ? E : never;
type Num = ElementOf<number[]>; // number
const n: Num = 42;
console.log(n); // -> 42

// Pull the return type out of a function. This IS `ReturnType<T>`.
type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
function makeUser() {
  return { id: 1, name: "Ada" };
}
type MadeUser = MyReturnType<typeof makeUser>; // { id: number; name: string }
const made: MadeUser = { id: 1, name: "Ada" };
console.log(made.name); // -> Ada

// `infer` can match ANYWHERE in a structure - here, the first element of a tuple.
type Head<T> = T extends [infer First, ...unknown[]] ? First : never;
type FirstArg = Head<[string, number, boolean]>; // string
const fa: FirstArg = "x";
console.log(fa); // -> x

// RECURSIVE `infer`: keep unwrapping until the pattern stops matching. This is how
// the built-in `Awaited<T>` peels nested promises and how you flatten nested
// arrays to their innermost element type.
type DeepFlatten<T> = T extends (infer E)[] ? DeepFlatten<E> : T;
type Flat = DeepFlatten<number[][][]>; // number
const flat: Flat = 7;
console.log(flat); // -> 7
