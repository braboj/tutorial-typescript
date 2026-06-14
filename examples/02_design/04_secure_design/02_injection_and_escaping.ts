// Avoiding Injection
// ------------------
// Injection happens when untrusted input is concatenated into a command that is
// then interpreted - SQL, HTML, shell, etc. The fix is the same everywhere:
// keep DATA separate from CODE. Never build executable strings by
// concatenation.

const userInput = "Robert'); DROP TABLE students;--";
// a classic malicious value

// BAD: string concatenation lets the input change the query's STRUCTURE.
const unsafeQuery = `SELECT * FROM users WHERE name = '${userInput}'`;
// -> true  (attack injected)
console.log(unsafeQuery.includes("DROP TABLE"));

// GOOD: parameterized queries. The input is passed as DATA, bound to a
// placeholder, and can never alter the query structure. (Shown as a builder; a
// real driver like pg/mysql2 does this for you with `?`/`$1` placeholders.)
function buildQuery(
  sql: string,
  params: string[],
): { sql: string; params: string[] } {
  return { sql, params }; // the driver sends sql and params separately
}
const safe = buildQuery("SELECT * FROM users WHERE name = $1", [userInput]);
// -> SELECT * FROM users WHERE name = $1
console.log(safe.sql);
// -> Robert'); DROP TABLE students;--
console.log(safe.params[0]);

// For HTML output, ESCAPE untrusted text so it renders as text, not markup.
// This prevents cross-site scripting (XSS).
function escapeHtml(text: string): string {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
const comment = "<script>steal()</script>";
// -> &lt;script&gt;steal()&lt;/script&gt;
console.log(escapeHtml(comment));

// Rule of thumb: validate input on the way IN, and escape/parameterize on the
// way OUT - matched to the destination (SQL, HTML, shell, ...).
