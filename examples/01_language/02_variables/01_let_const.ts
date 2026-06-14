// let vs const (and why not var)
// ------------------------------
// Modern TypeScript uses `let` for variables that change and `const` for those
// that don't. Avoid `var` - it ignores block scope and causes surprising bugs.

let counter = 0; // can be reassigned
counter = counter + 1;
// -> 1
console.log(counter);

const pi = 3.14159; // cannot be reassigned
// -> 3.14159
console.log(pi);

// pi = 3; // Error: Cannot assign to 'pi' because it is a constant.

// `const` makes the *binding* constant, not the object. The contents of a
// const object or array can still change:
const scores = [10, 20];
scores.push(30);
// -> [ 10, 20, 30 ]
console.log(scores);

// Block scope: a variable only exists inside the {} it is declared in.
{
  const secret = "hidden";
  // -> hidden
  console.log(secret);
}
// console.log(secret); // Error: Cannot find name 'secret'.
