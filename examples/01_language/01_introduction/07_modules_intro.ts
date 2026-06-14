// Modules (a first look)
// ----------------------
// In TypeScript, every file is a MODULE: its top-level names are private to
// that
// file unless you `export` them. This keeps code organized and avoids the
// global
// namespace pollution of old-style scripts. (Full details in ../11_modules.)

// `export` makes a name available to other files:
export const VERSION = "1.0.0";

export function greet(name: string): string {
  return `Hi, ${name}`;
}

// No `export` = private to this module; nothing else can see it:
function internalHelper(): string {
  return "only this file can call me";
}

// A module's top-level code runs when the module is first imported (or
// executed):
// -> Hi, Ada
console.log(greet("Ada"));
// -> version 1.0.0
console.log(`version ${VERSION}`);
// -> only this file can call me
console.log(internalHelper());

// Another file would use the exports like this:
//
//   import { greet, VERSION } from "./07_modules_intro.js";
//
// Note the ".js" extension in the import path even though the file is ".ts" -
// that's the modern Node ESM convention, explained in the Modules chapter.
