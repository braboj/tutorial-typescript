// Generic Interfaces & Type Aliases
// ---------------------------------
// Interfaces and type aliases can take type parameters, letting you describe
// reusable, type-safe data shapes.

// A generic API response wrapper:
interface ApiResponse<T> {
  ok: boolean;
  data: T;
  error?: string;
}

const userResponse: ApiResponse<{ name: string }> = {
  ok: true,
  data: { name: "Ada" },
};
// -> Ada
console.log(userResponse.data.name);

const listResponse: ApiResponse<number[]> = { ok: true, data: [1, 2, 3] };
// -> 3
console.log(listResponse.data.length);

// A generic Result type alias - a common alternative to throwing:
type Result<T, E = string> =
  | { success: true; value: T }
  | { success: false; error: E };

function divide(a: number, b: number): Result<number> {
  if (b === 0) return { success: false, error: "divide by zero" };
  return { success: true, value: a / b };
}

const r = divide(10, 2);
if (r.success) {
  // -> 5
  console.log(r.value);
}
// -> { success: false, error: 'divide by zero' }
console.log(divide(1, 0));

// Generic function-type interface -> 5
interface Mapper<In, Out> {
  (input: In): Out;
}
const toLength: Mapper<string, number> = (s) => s.length;
console.log(toLength("hello"));
