// LAB - File System
// =================
// Implement each task below so that running this file produces exactly the
// output shown in the `// Expected:` comments. Work top to bottom.
//
//   Run:   npx tsx examples/03_libraries/05_filesystem/lab.ts
//
// Covered by this chapter: node:path (join, resolve, basename, dirname,
// extname, parse, relative) and node:fs/promises (mkdtemp, writeFile,
// appendFile, readFile, stat, readdir, rm) with async/await.
// See the numbered example files in this folder if you get stuck.
//
// Hints for imports you will likely need (do not pre-import unused ones):
//   import path from "node:path";
//   import { mkdtemp, writeFile, appendFile, readFile, stat, readdir, rm }
//     from "node:fs/promises";
//   import { tmpdir } from "node:os";
// Use `path.posix` (call it `p`) wherever you build/parse paths so the printed
// output matches on every operating system.

// ---------------------------------------------------------------------------
// Task 1 - Join path segments
// Using path.posix, join the segments "home", "kira", "docs", "report.pdf"
// into a single path and print it.
// Expected: home/kira/docs/report.pdf

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 2 - Resolve to an absolute path
// Using path.posix, resolve "/opt", "bin", "../share", "config.yaml" into an
// absolute path and print it.
// Expected: /opt/share/config.yaml

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 3 - Take a path apart
// Given the path below, print its basename, the basename without the ".csv"
// extension, its dirname, and its extension - one value per line.
// Tip: basename, dirname and extname each return a single string.
const dataPath = "/srv/exports/2024/sales.csv";
// Expected: sales.csv
// Expected: sales
// Expected: /srv/exports/2024
// Expected: .csv

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 4 - Relative path between two locations
// Using path.posix, print how to get from "/usr/local/bin" to
// "/usr/local/share/man".
// Expected: ../share/man

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 5 - Write, append and read a file
// Inside an async function (call it at the bottom), create a unique temp
// directory with mkdtemp using join(tmpdir(), "lab-fs-"). Build a file path
// for "log.txt" inside it. Write "boot\n" to the file, then append "ready\n".
// Read the file back as utf8 and print it with trailing whitespace trimmed.
// Finally remove the temp directory recursively so no mess is left.
// Expected: boot
// Expected: ready

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 6 - File metadata and directory listing
// Inside an async function, make a fresh temp dir (mkdtemp + "lab-meta-").
// Write a file "id.txt" containing exactly "12345" (5 bytes, no newline) and
// an empty file "data.json" containing "{}". Use stat on "id.txt" to print
// whether it is a file and its byte size. Then read the directory, sort the
// entries, and print the sorted array. Clean up the temp dir afterwards.
// Tip: stat(...).isFile() returns a boolean; the size is in `.size`.
// Expected: isFile: true
// Expected: bytes: 5
// Expected: [ 'data.json', 'id.txt' ]

// TODO: your code here
