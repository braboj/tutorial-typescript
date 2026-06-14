// if / else if / else
// --------------------
function classify(n: number): string {
  if (n < 0) {
    return "negative";
  } else if (n === 0) {
    return "zero";
  } else {
    return "positive";
  }
}
// -> negative
console.log(classify(-3));
// -> zero
console.log(classify(0));
// -> positive
console.log(classify(5));

// Conditions must be truthy/falsy. Remember the falsy values:
// false, 0, "", null, undefined, NaN.
const input = "";
if (input) {
  console.log("has input");
} else {
  // -> empty input
  console.log("empty input");
}

// The ternary operator is a compact if/else that produces a value:
const n = 7;
const parity = n % 2 === 0 ? "even" : "odd";
// -> odd
console.log(parity);
