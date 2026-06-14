// Secrets & Safe Error Handling
// -----------------------------
// Two easy-to-get-wrong areas: don't leak secrets in logs/errors, and compare
// secrets safely.

import { timingSafeEqual } from "node:crypto";

// 1. Redact sensitive fields before logging. Never log raw passwords/tokens.
const SENSITIVE = new Set(["password", "token", "apiKey", "ssn"]);

function redact(obj: Record<string, unknown>): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(obj)) {
    out[key] = SENSITIVE.has(key) ? "***REDACTED***" : value;
  }
  return out;
}

const request = { user: "ada", password: "hunter2", token: "abc123" };
// -> {"user":"ada","password":"***REDACTED***","token":"***REDACTED***"}
console.log(JSON.stringify(redact(request)));

// 2. Compare secrets in CONSTANT time. A normal === can leak how many
// characters
// matched via timing, helping attackers guess byte-by-byte.
function safeEqual(a: string, b: string): boolean {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  // Length must match for timingSafeEqual; checking it first is acceptable.
  if (bufA.length !== bufB.length) return false;
  return timingSafeEqual(bufA, bufB);
}
// -> true
console.log(safeEqual("s3cret-token", "s3cret-token"));
// -> false
console.log(safeEqual("s3cret-token", "wrong-token!"));

// 3. Show GENERIC errors to users; keep details server-side. Leaking "user not
// found" vs "wrong password" tells an attacker which usernames exist.
function login(found: boolean, passwordOk: boolean): string {
  if (!found || !passwordOk) {
    return "Invalid email or password"; // same message for both cases
  }
  return "Welcome back";
}
// -> Invalid email or password
console.log(login(false, false));
// -> Invalid email or password
console.log(login(true, false));
// -> Welcome back
console.log(login(true, true));
