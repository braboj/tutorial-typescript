// Streams (node:stream)
// ---------------------
// Streams process data piece-by-piece instead of loading it all into memory -
// essential for large files, network data, and pipelines. The four kinds:
// Readable (source), Writable (sink), Duplex (both), Transform (modifies).
//
// `pipeline` (from node:stream/promises) connects them and handles errors and
// cleanup for you - prefer it over manual .pipe().

import { Readable, Writable, Transform } from "node:stream";
import { pipeline } from "node:stream/promises";

async function main(): Promise<void> {
  // A Readable source from an in-memory array:
  const source = Readable.from(["apple", "banana", "cherry"]);

  // A Transform that upper-cases each chunk:
  const toUpper = new Transform({
    objectMode: true,
    transform(chunk: string, _enc, callback) {
      callback(null, chunk.toUpperCase());
    },
  });

  // A Writable sink that collects results:
  const collected: string[] = [];
  const sink = new Writable({
    objectMode: true,
    write(chunk: string, _enc, callback) {
      collected.push(chunk);
      callback();
    },
  });

  // Wire the pipeline: source -> transform -> sink -> [ 'APPLE', 'BANANA', 'CHERRY' ]
  await pipeline(source, toUpper, sink);
  console.log(collected);

  // Readables are async-iterable, which is often the simplest way to consume
  // them -> sum: 10
  let total = 0;
  for await (const n of Readable.from([1, 2, 3, 4])) {
    total += n as number;
  }
  console.log("sum:", total);
}

main();
