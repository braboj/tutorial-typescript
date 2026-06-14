// Generators
// ----------
// A generator function (function*) can PAUSE and RESUME. Each `yield` produces
// a
// value and suspends until the caller asks for the next one. Generators are the
// easiest way to create iterators.

function* count(): Generator<number> {
  yield 1;
  yield 2;
  yield 3;
}

// A generator returns an iterator, so it works with for...of and spread -> [ 1, 2, 3 ]
console.log([...count()]);

// -> 1 2 3
for (const n of count()) process.stdout.write(`${n} `);
console.log();

// Step through manually to see the pause/resume and `done`:
const it = count();
// -> { value: 1, done: false }
console.log(it.next());
// -> { value: 2, done: false }
console.log(it.next());
// -> { value: 3, done: false }
console.log(it.next());
// -> { value: undefined, done: true }
console.log(it.next());

// yield* delegates to another iterable - great for composition:
function* letters(): Generator<string> {
  yield "a";
  yield "b";
}
function* combined(): Generator<string | number> {
  yield* letters(); // delegate
  yield* ["c", "d"]; // any iterable works
  yield 99;
}
// -> [ 'a', 'b', 'c', 'd', 99 ]
console.log([...combined()]);

// Generators are two-way: next(value) sends a value back INTO the paused yield.
function* echo(): Generator<string, void, string> {
  const name = yield "what's your name?";
  yield `hello, ${name}`;
}
const e = echo();
// -> what's your name?
console.log(e.next().value);
// -> hello, Ada
console.log(e.next("Ada").value);
