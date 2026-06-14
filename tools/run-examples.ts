// Runs every runnable lesson under examples/ and reports which ones work.
//
// A lesson "works" when it exits 0 within the timeout. This is the CI
// "examples work" gate (see docs/decisions/001-example-runner-ci-gate.md):
// a single throwing or hanging lesson fails the build. The lab.ts scratch
// files are excluded - they are experiment surfaces, not gated lessons.

import { spawnSync } from "node:child_process";
import { readdirSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";

const ROOT = process.cwd();
const EXAMPLES_DIR = join(ROOT, "examples");

// Per-file timeout. The slowest lesson runs in well under a second; this only
// catches an accidental hang (a server that never closes, an unresolved
// await). A timeout counts as a failure.
const TIMEOUT_MS = 20_000;

// Generous output buffer so a chatty lesson (logging, streams) is not killed
// for printing too much.
const MAX_BUFFER = 16 * 1024 * 1024;

// Lessons intentionally skipped by the runner. Empty today: the SP-A audit
// found every lesson self-terminates. Add a path here only together with a
// documented run contract (see docs/decisions/001-example-runner-ci-gate.md).
const EXCLUDE = new Set<string>([]);

type Status = "pass" | "fail" | "timeout";

interface Result {
  file: string;
  status: Status;
  detail: string;
}

function toPosix(path: string): string {
  return path.split(sep).join("/");
}

function collectLessons(dir: string): string[] {
  const files: string[] = [];

  for (const entry of readdirSync(dir).sort()) {
    const full = join(dir, entry);

    if (statSync(full).isDirectory()) {
      files.push(...collectLessons(full));
      continue;
    }

    if (entry.endsWith(".ts") && entry !== "lab.ts") {
      files.push(full);
    }
  }

  return files;
}

function runLesson(file: string): Result {
  const relPath = toPosix(relative(ROOT, file));

  const run = spawnSync(process.execPath, ["--import", "tsx", file], {
    encoding: "utf8",
    timeout: TIMEOUT_MS,
    maxBuffer: MAX_BUFFER,
    cwd: ROOT,
  });

  const errorCode = (run.error as NodeJS.ErrnoException | undefined)?.code;

  if (errorCode === "ETIMEDOUT") {
    return {
      file: relPath,
      status: "timeout",
      detail: `did not exit within ${TIMEOUT_MS} ms`,
    };
  }

  if (run.error) {
    return {
      file: relPath,
      status: "fail",
      detail: run.error.message.slice(0, 200),
    };
  }

  if (run.status === 0) {
    return { file: relPath, status: "pass", detail: "" };
  }

  const lines = (run.stderr ?? "")
    .trim()
    .split("\n")
    .filter((line) => line.length > 0);

  const firstError =
    lines.find((line) => /error|cannot|not found/i.test(line)) ??
    lines.at(-1) ??
    `exit code ${String(run.status)}`;

  return { file: relPath, status: "fail", detail: firstError.slice(0, 200) };
}

function main(): void {
  const lessons = collectLessons(EXAMPLES_DIR).filter(
    (file) => !EXCLUDE.has(toPosix(relative(ROOT, file))),
  );

  const results = lessons.map(runLesson);
  const failures = results.filter((result) => result.status !== "pass");

  for (const failure of failures) {
    console.log(`${failure.status.toUpperCase()}  ${failure.file}`);
    console.log(`      ${failure.detail}`);
  }

  console.log("");
  console.log(
    `examples: ${String(results.length - failures.length)}/${String(results.length)} passed`,
  );

  if (failures.length > 0) {
    console.log(`${String(failures.length)} failing - see above`);
    process.exit(1);
  }
}

main();
