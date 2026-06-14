// LAB - Secure Design
// ===================
// Implement each task below so that running this file produces exactly the
// output shown in the `// Expected:` comments. Work top to bottom.
//
//   Run:   npx tsx examples/02_design/04_secure_design/lab.ts
//
// Covered by this chapter: validating untrusted input, avoiding injection
// (parameterized queries, HTML escaping), safe defaults & least privilege,
// redacting secrets, constant-time comparison, and generic error messages.
// See the numbered example files in this folder if you get stuck.

// ---------------------------------------------------------------------------
// Task 1 - Validate untrusted input
// Data from outside is `unknown`. Write a function `parseProduct(raw: unknown)`
// that returns a `{ name: string; price: number }` or throws an Error. Require
// `name` to be a non-empty string and `price` to be a number >= 0. Reject
// anything else with the message "invalid product".
// Then parse a good payload and print its name, and catch a bad one and print
// "rejected:" followed by the error message.
// Tip: narrow with `typeof` after checking the value is a non-null object.
// Expected: keyboard
// Expected: rejected: invalid product

// TODO: your code here
// const good = parseProduct(JSON.parse('{"name":"keyboard","price":40}'));
// console.log(good.name);
// try { parseProduct(JSON.parse('{"name":"","price":40}')); }
// catch (e) { console.log("rejected:", (e as Error).message); }

// ---------------------------------------------------------------------------
// Task 2 - Keep data separate from code (parameterized query)
// A naive query built by concatenation lets input change the query STRUCTURE.
// Given the malicious input below, build a parameterized query with a function
// `buildQuery(sql, params)` that returns `{ sql, params }`. Use the placeholder
// `$1`. Print the sql template, then print the single param value (unchanged).
// Tip: the input is passed as DATA, never spliced into the sql string.
const search = "'; DROP TABLE products;--";
// Expected: SELECT * FROM products WHERE title = $1
// Expected: '; DROP TABLE products;--

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 3 - Escape HTML to prevent XSS
// Write `escapeHtml(text)` that replaces & < > " ' with their HTML entities
// (&amp; &lt; &gt; &quot; &#39;). Escape the untrusted comment below and print
// the result so it renders as text, not markup.
const comment = '<img src=x onerror="hack()">';
// Expected: &lt;img src=x onerror=&quot;hack()&quot;&gt;

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 4 - Safe defaults & least privilege
// Build a default-deny authorization check. Define roles "viewer", "member",
// "owner" and actions "view", "comment", "remove". Grant: viewer -> view;
// member -> view, comment; owner -> view, comment, remove. Write `can(role,
// action)` returning true only on an explicit grant. Print the results below.
// Tip: use a Record mapping each role to a Set of allowed actions.
// Expected: true
// Expected: false
// Expected: true

// TODO: your code here
// console.log(can("viewer", "view"));
// console.log(can("member", "remove"));
// console.log(can("owner", "remove"));

// ---------------------------------------------------------------------------
// Task 5 - Fail closed at the boundary
// Write `removeItem(role, id)` that throws an Error "forbidden" unless the role
// `can` perform "remove"; otherwise it returns `removed #<id>`. Call it once
// with a permitted role and once with a denied role (catch and print message).
// Expected: removed #12
// Expected: forbidden

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 6 - Redact secrets before logging
// Write `redact(obj)` that returns a copy where any key in the sensitive set
// (password, token, secret, pin) has its value replaced by "***REDACTED***".
// Redact the record below and print it with JSON.stringify.
const event = { user: "grace", token: "xyz789", action: "login" };
// Expected: {"user":"grace","token":"***REDACTED***","action":"login"}

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 7 - Constant-time compare + generic auth message
// (a) Write `safeEqual(a, b)` using node:crypto's `timingSafeEqual` over
//     Buffers; return false immediately if the byte lengths differ.
// (b) Write `authenticate(found, passwordOk)` that returns the SAME generic
//     message "Login failed" whenever either is false, and "Access granted"
//     only when both are true.
// Print: safeEqual on two equal strings, then authenticate(true, false),
// then authenticate(true, true).
// Tip: import { timingSafeEqual } from "node:crypto".
// Expected: true
// Expected: Login failed
// Expected: Access granted

// TODO: your code here
