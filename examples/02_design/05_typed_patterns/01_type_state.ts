// Type-State Pattern
// ------------------
// Encode an object's STATE in its TYPE, so calling a method in the wrong state is
// a COMPILE error rather than a runtime one. The state is a phantom type parameter
// carrying no runtime data - it only gates which methods are callable. The lever
// is a typed `this` parameter (see ../../01_language/08_functions/05_this_context.ts).

// States are just unique string-literal tags used as the type argument.
type Open = "open";
type Closed = "closed";

class Door<S extends Open | Closed> {
  // The tag is stored only so transitions can produce the next one; nothing else.
  private constructor(private readonly state: S) {}

  // A closed door is the only entry point. The return type pins the state.
  static closed(): Door<Closed> {
    return new Door("closed");
  }

  // `open()` type-checks ONLY on a Door<Closed>, and yields a Door<Open>.
  open(this: Door<Closed>): Door<Open> {
    console.log("opening");
    return new Door("open");
  }

  // `close()` type-checks ONLY on a Door<Open>, and yields a Door<Closed>.
  close(this: Door<Open>): Door<Closed> {
    console.log("closing");
    return new Door("closed");
  }
}

const door = Door.closed();
const opened = door.open(); // -> opening   (OK: door is closed)
const closedAgain = opened.close(); // -> closing   (OK: opened is open)
console.log(closedAgain instanceof Door); // -> true

// These are COMPILE errors - the wrong-state method simply does not type-check:
//   door.close();   // Error: 'this' of type Door<"closed"> not assignable to Door<"open">
//   opened.open();  // Error: 'this' of type Door<"open"> not assignable to Door<"closed">

// The payoff: the "open a closed door / close an open door" protocol is enforced
// by the compiler - no runtime flag, no `if (state !== ...)` guard, no bad-state bug.
