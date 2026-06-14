// Secure Design (starter)
// -----------------------
// Security-minded TypeScript habits. This section will cover validating
// external
// data, avoiding injection, safe defaults, and the principle of least
// privilege.
//
// Key idea: data from outside (HTTP, files, env) is `unknown`. NEVER trust its
// type - validate it into a known shape before use. TypeScript's types vanish
// at
// runtime, so type annotations alone do NOT protect you.

interface SignupInput {
  email: string;
  age: number;
}

// A runtime validator that returns a typed value or throws. (In real apps, a
// library like zod or valibot does this for you.)
function parseSignup(raw: unknown): SignupInput {
  if (typeof raw !== "object" || raw === null) {
    throw new Error("body must be an object");
  }
  const obj = raw as Record<string, unknown>;
  if (typeof obj.email !== "string" || !obj.email.includes("@")) {
    throw new Error("invalid email");
  }
  if (typeof obj.age !== "number" || obj.age < 0 || obj.age > 150) {
    throw new Error("invalid age");
  }
  return { email: obj.email, age: obj.age };
}

// Simulate a trusted payload and a malicious one -> a@b.io
const good = parseSignup(JSON.parse('{"email":"a@b.io","age":30}'));
console.log(good.email);

try {
  parseSignup(JSON.parse('{"email":"not-an-email","age":30}'));
} catch (e) {
  // -> rejected: invalid email
  console.log("rejected:", (e as Error).message);
}
