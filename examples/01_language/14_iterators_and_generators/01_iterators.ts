// Iterators & Iterables
// ---------------------
// An ITERABLE is anything with a [Symbol.iterator]() method that returns an
// ITERATOR (an object with next()). Arrays, strings, Maps, and Sets are all
// iterable - which is why for...of, spread, and destructuring work on them.

// Built-in iterables -> h.i.
for (const ch of "hi") process.stdout.write(ch + ".");
console.log();

// Make your OWN type iterable by implementing [Symbol.iterator].
class NumberRange implements Iterable<number> {
  constructor(
    private start: number,
    private end: number,
    private step = 1,
  ) {}

  [Symbol.iterator](): Iterator<number> {
    let current = this.start;
    const { end, step } = this;
    return {
      next(): IteratorResult<number> {
        if (current < end) {
          const value = current;
          current += step;
          return { value, done: false };
        }
        return { value: undefined, done: true };
      },
    };
  }
}

const range = new NumberRange(0, 10, 2);

// Because it's iterable, ALL of these just work -> [ 0, 2, 4, 6, 8 ]
console.log([...range]);
// -> [ 0, 2, 4, 6, 8 ]
console.log(Array.from(range));

let total = 0;
for (const n of range) total += n;
// -> 20
console.log(total);

const [first, second] = range; // destructuring uses the iterator too
// -> 0 2
console.log(first, second);

// Writing next() by hand is tedious. Generators (next file) produce iterators
// for you with much less code.
