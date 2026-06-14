// Lazy Sequences with Generators
// ------------------------------
// Generators compute values ON DEMAND, so they can represent INFINITE sequences
// and build memory-efficient pipelines that never materialize the whole list.

// An infinite sequence - safe because nothing is computed until requested.
function* naturals(): Generator<number> {
  let n = 1;
  while (true) yield n++;
}

// Lazy combinators that take and return iterables:
function* take<T>(source: Iterable<T>, n: number): Generator<T> {
  let i = 0;
  for (const item of source) {
    if (i++ >= n) return;
    yield item;
  }
}
function* map<T, U>(source: Iterable<T>, fn: (x: T) => U): Generator<U> {
  for (const item of source) yield fn(item);
}
function* filter<T>(
  source: Iterable<T>,
  pred: (x: T) => boolean,
): Generator<T> {
  for (const item of source) if (pred(item)) yield item;
}

// Compose a pipeline over an INFINITE source - only 5 values are ever computed.
const firstFiveEvenSquares = take(
  map(
    filter(naturals(), (n) => n % 2 === 0),
    (n) => n * n,
  ),
  5,
);
// -> [ 4, 16, 36, 64, 100 ]
console.log([...firstFiveEvenSquares]);

// Another classic: an infinite Fibonacci generator, consumed lazily.
function* fibonacci(): Generator<number> {
  let [a, b] = [0, 1];
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}
// -> 0 1 1 2 3 5 8 13 21 34
console.log([...take(fibonacci(), 10)].join(" "));

// Laziness means you only pay for what you consume - ideal for streams, paging,
// and large/unbounded data.
