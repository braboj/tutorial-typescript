// LAB - Advanced Types
// ====================
// Implement each task below so that running this file produces exactly the
// output shown in the `// Expected:` comments. Work top to bottom.
//
//   Run:   npx tsx examples/01_language/17_advanced_types/lab.ts
//
// Covered by this chapter: keyof / typeof / indexed access, conditional types,
// `infer`, mapped types (with key remapping), variance, type predicates &
// assertion functions, `satisfies`, and branded types.
// See the numbered example files in this folder if you get stuck.

// ---------------------------------------------------------------------------
// Task 1 - Indexed access
// Given the `account` object below, declare `type Balance` as the TYPE of its
// `balance` property using an indexed access type on `typeof account`. Create a
// Balance value of 100 and print it.
const account = { id: "a-1", balance: 250, active: true };
// Expected: 100
// Tip: (typeof account)["balance"]

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 2 - Conditional type
// Write `type IsArray<T>` that resolves to `true` when T is any array type and
// `false` otherwise. Assign the result of `IsArray<string[]>` to a const and
// print it.
// Expected: true
// Tip: T extends unknown[] ? true : false

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 3 - infer
// Write `type Unwrap<T>` that resolves to U when T is a Promise<U>, otherwise to
// T. Use it as the type of a const holding 7 (typed Unwrap<Promise<number>>) and
// print it.
// Expected: 7
// Tip: T extends Promise<infer U> ? U : T

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 4 - Mapped type
// Write `type Optional<T>` that makes every property of T optional (reimplement
// Partial). Apply it to the Settings interface and create a value that sets ONLY
// `theme` to "dark". Print it.
interface Settings {
  theme: string;
  fontSize: number;
}
// Expected: { theme: 'dark' }
// Tip: { [K in keyof T]?: T[K] }

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 5 - Mapped type with key filtering
// Write `type NumberKeys<T>` that keeps ONLY the properties of T whose value type
// is `number`, dropping the rest via `as ... never`. Apply it to `typeof account`
// (Task 1) and create a matching value `{ balance: 99 }`. Print it.
// Expected: { balance: 99 }
// Tip: { [K in keyof T as T[K] extends number ? K : never]: T[K] }

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 6 - Assertion function
// Write `assertDefined<T>(value: T | undefined): asserts value is T` that throws
// "missing" when the value is undefined. Use it to narrow the lookup below from
// `string | undefined` to `string`, then print the upper-cased color.
const colors: Record<string, string> = { primary: "blue" };
// Expected: BLUE
// Tip: const c = colors["primary"]; assertDefined(c); ...

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 7 - Branded type
// Define a branded `type Email = string & { readonly __brand: "Email" }`. Write
// `toEmail(raw: string): Email` that throws "invalid email" unless `raw` contains
// "@", otherwise asserts the brand. Create one from "a@x.io" and print it.
// Expected: a@x.io
// Tip: return raw as Email; (after validating)

// TODO: your code here
