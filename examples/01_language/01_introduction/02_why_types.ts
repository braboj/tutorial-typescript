// Why Types?
// ----------
// Types describe the *shape* of your data. The compiler then checks, before the
// program ever runs, that you only use values in ways that make sense.
//
// In plain JavaScript the bug below ships to production and fails at runtime.
// In TypeScript it is caught while you type.

// ---------------------------------------------------------------------------
// A simple function to greet someone by name. It expects a string and calls
// toUpperCase() on it. But what if we accidentally pass a number?
function greet(name: string): string {
  return "Hello, " + name.toUpperCase();
}

// -> Hello, ADA
console.log(greet("ada"));



// ---------------------------------------------------------------------------
// Uncommenting the line below will cause a compile-time error:
// ~~ Argument of type 'number' is not assignable to parameter of type 'string'.
//
// This is the whole value proposition: mistakes surface as you write, not when
// a user hits them. If you try to run this code, it will fail at runtime with
// a TypeError because numbers don't have a toUpperCase method. But with
// TypeScript, you get an error immediately, and you can fix it before it 
// ever runs.

// console.log(greet(42));

