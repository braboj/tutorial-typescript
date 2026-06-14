// Type Inference
// --------------
// You rarely need to write types by hand. TypeScript infers them from values.
// Idiomatic TypeScript leans on inference and annotates only at boundaries
// (function parameters, public APIs).

let city = "Berlin"; // inferred as string
// city = 42;        // Error: Type 'number' is not assignable to type 'string'.
// -> string
console.log(typeof city);

const numbers = [1, 2, 3]; // inferred as number[]
const doubled = numbers.map((n) => n * 2); // n is inferred as number
// -> [ 2, 4, 6 ]
console.log(doubled);

// `const` infers the *literal* type; `let` widens to the general type.
const exact = "GET"; // type is the literal "GET"
let widened = "GET"; // type is the broader string
// -> GET GET
console.log(exact, widened);

// `as const` freezes an entire structure to its most specific, readonly types.
const config = {
  method: "POST",
  retries: 3,
} as const;
// config.retries = 5; // Error: Cannot assign to 'retries' (readonly).
// -> POST
console.log(config.method);
