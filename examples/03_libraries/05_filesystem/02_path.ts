// Paths (node:path)
// -----------------
// `node:path` builds and parses file paths correctly for the current OS, so you
// never hand-concatenate strings with "/" or "\". On Windows the default `path`
// uses "\"; here we use `path.posix` so the printed output is the same on every
// platform.

import path from "node:path";

const p = path.posix;

// join: combine segments with the right separator, normalizing as it goes.
// -> users/linus/file.txt
console.log(p.join("users", "ada", "..", "linus", "file.txt"));

// resolve: produce an absolute path (from a fake root here for determinism).
// -> /srv/data/db.sqlite
console.log(p.resolve("/srv", "app", "../data", "db.sqlite"));

// Pull a path apart:
const file = "/var/log/app/server.log";
console.log(p.basename(file)); // -> server.log
console.log(p.basename(file, ".log")); // -> server
console.log(p.dirname(file)); // -> /var/log/app
console.log(p.extname(file)); // -> .log

// parse / format are inverses:
const parsed = p.parse(file);
// -> /var/log/app | server | .log
console.log(parsed.dir, "|", parsed.name, "|", parsed.ext);

// relative: how to get from A to B.
// -> ../www/html
console.log(p.relative("/var/log", "/var/www/html"));

// In real code, just `import path from "node:path"` and call path.join(...) -
// it automatically does the right thing for the OS you run on.
