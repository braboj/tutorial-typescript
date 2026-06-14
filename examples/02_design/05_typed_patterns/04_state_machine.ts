// Typed State Machines (Discriminated Unions)
// -------------------------------------------
// Model a process as a UNION of states and a UNION of events, then write a
// transition function the compiler checks for completeness. Illegal states become
// UNREPRESENTABLE, and forgetting a case is a compile error. This is the core idea
// behind reducers (Redux), XState, and most robust async/UI logic.

// Each state is a tagged object. Impossible combinations can't even be built -
// there is no "loading WITH data AND error".
type State =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: string }
  | { status: "error"; message: string };

type Event =
  | { type: "fetch" }
  | { type: "resolve"; data: string }
  | { type: "reject"; message: string }
  | { type: "reset" };

// Exhaustiveness guard: if a new Event variant is added but not handled, `event`
// won't be `never` here and this stops compiling. (See ../../01_language/
// 07_control_flow/05_exhaustiveness.ts.)
function assertNever(x: never): never {
  throw new Error(`unhandled: ${JSON.stringify(x)}`);
}

// The reducer maps (state, event) -> next state.
function transition(state: State, event: Event): State {
  switch (event.type) {
    case "fetch":
      return state.status === "idle" ? { status: "loading" } : state;
    case "resolve":
      return { status: "success", data: event.data };
    case "reject":
      return { status: "error", message: event.message };
    case "reset":
      return { status: "idle" };
    default:
      return assertNever(event);
  }
}

let s: State = { status: "idle" };
s = transition(s, { type: "fetch" });
console.log(s.status); // -> loading
s = transition(s, { type: "resolve", data: "payload" });
// Narrowing on the discriminant unlocks the state-specific field safely:
if (s.status === "success") console.log(s.data); // -> payload
s = transition(s, { type: "reset" });
console.log(s.status); // -> idle

// Why this beats a `status: string` + loose fields: the compiler guarantees every
// event is handled and that you only read `data`/`message` in the state that has it.
