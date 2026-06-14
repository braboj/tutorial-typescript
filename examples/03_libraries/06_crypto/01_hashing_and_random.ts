// Crypto (node:crypto)
// --------------------
// Node's built-in cryptography. Use it for hashing, secure random values, and
// password storage. NEVER roll your own crypto algorithms - use these
// primitives.

import {
  randomUUID,
  randomBytes,
  createHash,
  scryptSync,
  timingSafeEqual,
} from "node:crypto";

// 1. Secure random identifiers. randomUUID() is the go-to for IDs.
const id = randomUUID();
// -> uuid length: 36
console.log("uuid length:", id.length);
// -> uuid is v4: true
console.log("uuid is v4:", id[14] === "4");

// Random bytes (e.g. for tokens), shown as hex -> token chars: 32
const token = randomBytes(16).toString("hex");
console.log("token chars:", token.length);

// 2. Hashing is one-way and DETERMINISTIC: same input -> same digest.
// Good for checksums/integrity. NOT for passwords (too fast - see below).
const digest = createHash("sha256").update("hello").digest("hex");
// -> 2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824
console.log(digest);

// 3. Password storage: use a SLOW, SALTED key-derivation function like scrypt.
// Store the salt alongside the hash; verify in constant time.
function hashPassword(password: string, salt: string): string {
  return scryptSync(password, salt, 32).toString("hex");
}
function verify(password: string, salt: string, expected: string): boolean {
  const actual = hashPassword(password, salt);
  return timingSafeEqual(
    Buffer.from(actual, "hex"),
    Buffer.from(expected, "hex"),
  );
}

const salt = "fixed-salt-for-demo";
// real code: randomBytes(16).toString("hex")
const stored = hashPassword("s3cret", salt);
// -> true
console.log(verify("s3cret", salt, stored));
// -> false
console.log(verify("wrong", salt, stored));
