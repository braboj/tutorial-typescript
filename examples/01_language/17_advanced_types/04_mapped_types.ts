// Mapped Types
// ------------
// A mapped type builds a NEW object type by iterating over keys:
// `{ [K in Keys]: ValueType }`. This is how `Partial`, `Readonly`, `Pick`, and
// `Record` are actually implemented. Once you can READ these, the standard
// library's types stop being magic.

interface User {
  id: number;
  name: string;
  email: string;
}

// Iterate `K in keyof T` and reuse the value type `T[K]`. Modifiers tweak each
// property:
//   `?`        makes it optional   -> this IS Partial<T>
//   `readonly` makes it immutable  -> this IS Readonly<T>
type MyPartial<T> = { [K in keyof T]?: T[K] };
type MyReadonly<T> = { readonly [K in keyof T]: T[K] };

const patch: MyPartial<User> = { name: "Ada" }; // every key optional
console.log(patch); // -> { name: 'Ada' }

const frozen: MyReadonly<User> = { id: 1, name: "Ada", email: "a@x.io" };
// frozen.id = 2; // Error: cannot assign to a readonly property
console.log(frozen.id); // -> 1

// Modifiers can be REMOVED with a `-` prefix. `-?` makes optionals required;
// `-readonly` strips immutability. This is `Required<T>`.
type MyRequired<T> = { [K in keyof T]-?: T[K] };
type Loose = { x?: number };
const strict: MyRequired<Loose> = { x: 1 }; // x is now mandatory
console.log(strict.x); // -> 1

// KEY REMAPPING with `as` renames keys while mapping. Combined with template
// literal types it generates names - the kind of thing you see in generated API
// clients and ORMs.
type Getters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};
type PersonGetters = Getters<{ name: string; age: number }>;
// -> { getName: () => string; getAge: () => number }
const g: PersonGetters = {
  getName: () => "Ada",
  getAge: () => 36,
};
console.log(g.getName(), g.getAge()); // -> Ada 36

// Returning `never` from the `as` clause DROPS a key - this is how you filter
// properties by their value type.
type StringProps<T> = {
  [K in keyof T as T[K] extends string ? K : never]: T[K];
};
type OnlyStrings = StringProps<User>; // { name: string; email: string } - id dropped
const s: OnlyStrings = { name: "Ada", email: "a@x.io" };
console.log(s); // -> { name: 'Ada', email: 'a@x.io' }
