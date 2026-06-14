// Type Assertions
// ---------------
// An assertion (`as T`) tells the compiler "trust me, this value is T". It does
// NOT convert or check anything at runtime - it only changes the static type.
// Use sparingly: a wrong assertion hides a real bug.

const raw: unknown = "123";
const text = raw as string; // we assert raw is a string
// -> 3
console.log(text.length);

// Common, legitimate use: narrowing the result of JSON.parse.
interface Config {
  port: number;
  debug: boolean;
}
const parsed = JSON.parse('{"port":8080,"debug":true}') as Config;
// -> 8080
console.log(parsed.port);

// The non-null assertion `!` removes null/undefined. Only use it when YOU know
// more than the compiler.
function firstChar(s: string | undefined): string {
  return s!.charAt(0); // we promise s is not undefined here
}
// -> t
console.log(firstChar("ts"));

// `as const` is a special assertion: it makes a value deeply readonly and uses
// the narrowest literal types.
const roles = ["admin", "user"] as const;
// roles.push("guest"); // Error: push does not exist on readonly tuple
// -> admin
console.log(roles[0]);

// Avoid "double assertions" like `value as unknown as T` - they bypass all
// safety and are almost always a sign something is wrong upstream.
