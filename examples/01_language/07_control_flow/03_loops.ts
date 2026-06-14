// Loops: for, while, do...while
// -----------------------------

// Classic C-style for loop:
let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum += i;
}
// -> 15
console.log(sum);

// while: check condition first. -> 3 2 1
let countdown = 3;
while (countdown > 0) {
  process.stdout.write(`${countdown} `);
  countdown--;
}
console.log(); // newline

// do...while: run the body at least once, then check.
let attempts = 0;
do {
  attempts++;
} while (attempts < 1);
// -> 1
console.log(attempts);

// break exits the loop; continue skips to the next iteration.
const evens: number[] = [];
for (let i = 0; i < 10; i++) {
  if (i % 2 !== 0) continue; // skip odds
  if (i > 6) break; // stop early
  evens.push(i);
}
// -> [ 0, 2, 4, 6 ]
console.log(evens);
