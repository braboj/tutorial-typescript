// LAB - Crypto (node:crypto)
// ==========================
// Implement each task below so that running this file produces exactly the
// output shown in the `// Expected:` comments. Work top to bottom.
//
//   Run:   npx tsx examples/03_libraries/06_crypto/lab.ts
//
// Covered by this chapter: secure random UUIDs, random bytes/tokens (hex),
// deterministic hashing (createHash), salted password hashing with scrypt,
// constant-time comparison (timingSafeEqual).
// See the numbered example files in this folder if you get stuck.
//
// Hint: everything you need is imported from "node:crypto". Add the imports
// you require at the top as you go (e.g. randomUUID, randomBytes, createHash,
// scryptSync, timingSafeEqual). Buffer is a global, no import needed.

// ---------------------------------------------------------------------------
// Task 1 - A secure identifier
// Generate a UUID and print its length (do NOT print the UUID itself, since
// it is random and would not match a fixed expected value).
// Expected: id length: 36

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 2 - A random token
// Create 24 random bytes and encode them as a hex string. Print how many
// characters the hex string has (each byte becomes two hex characters).
// Tip: randomBytes(n) returns a Buffer; call .toString("hex") on it.
// Expected: token chars: 48

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 3 - A deterministic checksum (md5)
// Hashing is one-way and deterministic: the same input always yields the same
// digest. Compute the MD5 hex digest of the string "typescript" and print it.
// Expected: 1e35bcba2dba1089c7bd0805d4517c8f

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 4 - A stronger checksum (sha256)
// Compute the SHA-256 hex digest of the string "world" and print it.
// Expected: 486ea46224d1bb4fb680f34f7c9ad96a8f24ec88be73ea8e5a6c65260e9cb8a7

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 5 - Hash a password with scrypt
// Passwords must use a SLOW, SALTED key-derivation function, never a plain
// hash. Use scryptSync(password, salt, 32) with password "hunter2" and the
// given salt below. Encode the derived key as hex and print its length.
// (A 32-byte key is 64 hex characters.)
const passwordSalt = "demo-salt-1234";

// TODO: your code here
// Expected: stored hash length: 64

// ---------------------------------------------------------------------------
// Task 6 - Verify a password in constant time
// Re-derive the scrypt key for a candidate password and compare it against the
// stored hash using timingSafeEqual (which avoids timing attacks). Print the
// boolean result of verifying "hunter2" and then of verifying "letmein",
// both against the hash you produced in Task 5 (reuse passwordSalt).
// Tip: timingSafeEqual takes two Buffers of equal length; compare the raw
//      derived Buffers directly, or Buffer.from(hexString, "hex").
// Expected: verify hunter2: true
// Expected: verify letmein: false

// TODO: your code here
