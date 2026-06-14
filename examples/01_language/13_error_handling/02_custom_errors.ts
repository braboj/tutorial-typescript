// Custom Error Classes
// --------------------
// Subclass Error to create domain-specific error types. They enable precise
// `instanceof` handling and can carry extra context (status codes, fields,
// ...).

class ValidationError extends Error {
  constructor(
    public readonly field: string,
    message: string,
  ) {
    super(message);
    this.name = "ValidationError"; // set name so logs/stack show the right type
  }
}

class HttpError extends Error {
  constructor(
    public readonly status: number,
    message: string,
  ) {
    super(message);
    this.name = "HttpError";
  }
}

function validateAge(age: number): void {
  if (age < 0) throw new ValidationError("age", "age cannot be negative");
}

function handle(fn: () => void): string {
  try {
    fn();
    return "ok";
  } catch (err) {
    // Branch on the specific error type:
    if (err instanceof ValidationError) {
      return `invalid ${err.field}: ${err.message}`;
    }
    if (err instanceof HttpError) return `HTTP ${err.status}: ${err.message}`;
    throw err; // re-throw anything we don't understand
  }
}

console.log(handle(() => validateAge(25))); // -> ok
// -> invalid age: age cannot be negative
console.log(handle(() => validateAge(-1)));
// -> HTTP 404: not found
console.log(
  handle(() => {
    throw new HttpError(404, "not found");
  }),
);

// Error chaining with `cause` preserves the original error while adding
// context:
function loadConfig(): never {
  try {
    JSON.parse("{ broken");
    throw new Error("unreachable");
  } catch (err) {
    throw new Error("failed to load config", { cause: err });
  }
}
try {
  loadConfig();
} catch (err) {
  if (err instanceof Error) {
    console.log(err.message); // -> failed to load config
    console.log(err.cause instanceof SyntaxError); // -> true
  }
}
