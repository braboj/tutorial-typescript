// Conditional Types
// -----------------
// `T extends U ? X : Y` is an IF-statement in the type system: if T is assignable
// to U the result is X, otherwise Y. This is the gateway to the hard (and
// powerful) half of TypeScript - and how most built-in utility types are defined.

type IsString<T> = T extends string ? "yes" : "no";
type A = IsString<"hi">; // "yes"
type B = IsString<number>; // "no"
const a: A = "yes";
const b: B = "no";
console.log(a, b); // -> yes no

// THE key surprise: over a UNION, conditional types DISTRIBUTE - they apply to
// each member separately, then re-union the results.
type ToArray<T> = T extends unknown ? T[] : never;
type Arrs = ToArray<string | number>; // string[] | number[]  (NOT (string|number)[])
const strs: Arrs = ["a", "b"];
console.log(strs); // -> [ 'a', 'b' ]

// Distribution lets you FILTER union members. This is exactly how the built-in
// `Exclude<T, U>` and `NonNullable<T>` are implemented.
type MyExclude<T, U> = T extends U ? never : T;
type Letters = MyExclude<"a" | "b" | "c", "b">; // "a" | "c"
const letter: Letters = "c";
console.log(letter); // -> c

type MyNonNullable<T> = T extends null | undefined ? never : T;
type Defined = MyNonNullable<string | null | undefined>; // string
const d: Defined = "here";
console.log(d); // -> here

// Wrapping the parameter in a tuple `[T]` turns distribution OFF, treating the
// union as a single unit. A subtle but common gotcha - here it lets us detect the
// `never` type, which would otherwise distribute to nothing.
type IsNever<T> = [T] extends [never] ? true : false;
type R1 = IsNever<never>; // true
type R2 = IsNever<string>; // false
const r1: R1 = true;
const r2: R2 = false;
console.log(r1, r2); // -> true false
