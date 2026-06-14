// Arrays and Tuples
// -----------------
// Arrays hold many values of the SAME type. Tuples hold a FIXED number of
// values
// with a known type at each position.

// Two equivalent ways to type an array:
const primes: number[] = [2, 3, 5, 7];
const names: Array<string> = ["Ada", "Linus"];
// -> 2 Linus
console.log(primes[0], names[1]);

// readonly arrays cannot be mutated:
const frozen: readonly number[] = [1, 2, 3];
// frozen.push(4); // Error: Property 'push' does not exist on type 'readonly
// number[]'.

// A tuple: position 0 is a string, position 1 is a number.
const person: [string, number] = ["Ada", 36];
const [personName, age] = person; // destructuring
// -> Ada 36
console.log(personName, age);

// Named tuple elements document intent:
const point: [x: number, y: number] = [10, 20];
// -> x=10 y=20
console.log(`x=${point[0]} y=${point[1]}`);

// noUncheckedIndexedAccess (set in tsconfig) makes indexing safer: the result
// is `number | undefined`, forcing you to handle the missing case.
const maybe = primes[99];
// -> undefined
console.log(maybe);
