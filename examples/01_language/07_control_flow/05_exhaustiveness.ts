// Exhaustiveness Checking
// -----------------------
// A powerful TypeScript pattern: make the compiler guarantee you've handled
// EVERY case of a union. If someone adds a new case later, the code stops
// compiling until they handle it.

type Status = "draft" | "published" | "archived";

function label(status: Status): string {
  switch (status) {
    case "draft":
      return "Draft";
    case "published":
      return "Published";
    case "archived":
      return "Archived";
    default:
      // If every case is handled, `status` is narrowed to `never` here.
      // If a new status is added but not handled, this line becomes an error.
      return assertNever(status);
  }
}

function assertNever(x: never): never {
  throw new Error(`Unhandled case: ${String(x)}`);
}

// -> Draft
console.log(label("draft"));
// -> Archived
console.log(label("archived"));

// Try adding "deleted" to Status and run `npm run typecheck`:
//   error: Argument of type 'string' is not assignable to parameter of type
//   'never'.
// That error is the compiler reminding you to handle the new case.
