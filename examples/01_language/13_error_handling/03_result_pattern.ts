// Errors as Values: the Result Pattern
// ------------------------------------
// Throwing is invisible in a function's type - the signature doesn't tell you
// it
// can fail. An alternative used widely in TS (inspired by Rust/Go) is to RETURN
// the outcome as a value, making failure explicit and forcing the caller to
// handle it. (See also the Result type in
// ../10_generics/04_generic_interfaces.ts.)

type Result<T, E = Error> = { ok: true; value: T } | { ok: false; error: E };

// Helpers make construction tidy:
const ok = <T>(value: T): Result<T, never> => ({ ok: true, value });
const err = <E>(error: E): Result<never, E> => ({ ok: false, error });

function divide(a: number, b: number): Result<number, string> {
  if (b === 0) return err("division by zero");
  return ok(a / b);
}

// The caller CANNOT ignore failure - the type forces a check before .value.
const r1 = divide(10, 2);
if (r1.ok) console.log(r1.value); // -> 5

const r2 = divide(1, 0);
// -> error: division by zero
if (!r2.ok) console.log(`error: ${r2.error}`);

// A common pattern: wrap a throwing API into a Result at the boundary.
function tryParseJson(text: string): Result<unknown> {
  try {
    return ok(JSON.parse(text));
  } catch (e) {
    return err(e instanceof Error ? e : new Error(String(e)));
  }
}
console.log(tryParseJson('{"a":1}').ok); // -> true
console.log(tryParseJson("nope").ok); // -> false

// When to use which:
//   - throw/catch: for truly exceptional, unexpected failures and deep call
//   stacks.
//   - Result: for expected, recoverable outcomes you want callers to handle.
