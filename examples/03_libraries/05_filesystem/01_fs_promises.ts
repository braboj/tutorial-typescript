// File System (node:fs/promises)
// ------------------------------
// The modern, promise-based file API. Prefer `node:fs/promises` over the old
// callback `fs` functions so you can use async/await. We work inside a
// throwaway
// temp directory and clean it up, so this example leaves no mess.

import {
  mkdtemp,
  writeFile,
  readFile,
  appendFile,
  readdir,
  stat,
  rm,
} from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";

async function main(): Promise<void> {
  // Create a unique temp directory: .../ts-ex-XXXXXX
  const dir = await mkdtemp(join(tmpdir(), "ts-ex-"));

  const file = join(dir, "notes.txt");

  // Write (overwrites). Encoding "utf8" gives you a string, not a Buffer.
  await writeFile(file, "first line\n", "utf8");
  await appendFile(file, "second line\n", "utf8");

  const contents = await readFile(file, "utf8");
  // Prints the two written lines: "first line" then "second line".
  console.log(contents.trimEnd());

  // Metadata:
  const info = await stat(file);
  console.log("isFile:", info.isFile()); // -> isFile: true
  console.log("bytes:", info.size); // -> bytes: 23

  // List a directory:
  await writeFile(join(dir, "a.json"), "{}", "utf8");
  const entries = (await readdir(dir)).sort();
  console.log(entries); // -> [ 'a.json', 'notes.txt' ]

  // Clean up: remove the whole directory tree.
  await rm(dir, { recursive: true, force: true });

  // Tip: check existence by trying to access and catching, rather than a
  // separate "exists" call (which invites race conditions).
}

main();
