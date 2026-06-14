// LAB - Functions
// ================
// Implement each task below so that running this file produces exactly the
// output shown in the `// Expected:` comments. Work top to bottom.
//
//   Run:   npx tsx examples/01_language/08_functions/lab.ts
//
// Covered by this chapter: function declarations & expressions, function types,
// optional/default/rest/destructured parameters, arrow functions, overloads,
// `this` context, higher-order functions and closures.
// See the numbered example files in this folder if you get stuck.

// ---------------------------------------------------------------------------
// Task 1 - Declare and call a function
// Write a function named `area` that takes a width and a height (both numbers)
// and returns their product. Annotate the parameters and the return type.
// Then log the area of an 8 x 3 rectangle.
// Expected: 24

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 2 - Function type alias
// Declare a function type alias `StringOp` for a function that takes one string
// and returns a string. Assign to a const `shout` (typed as StringOp) an arrow
// function that uppercases its argument. Log the result of shouting "hello".
// Tip: with the type on the const, the parameter type is inferred.
// Expected: HELLO

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 3 - Optional, default, and rest parameters
// Write a function `label(prefix, ...items)` where `prefix` has a default value
// of "Item" and `items` is a rest parameter of strings. It returns the prefix
// followed by ": " and the items joined with ", ".
// Call it once with no arguments at all (use the default and zero items), and
// once as label("Fruit", "apple", "pear").
// Expected: Item:
// Expected: Fruit: apple, pear

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 4 - Destructured object parameter
// Write a function `formatOrder` that takes a single object parameter with a
// `product: string` and an optional `qty: number` that defaults to 1.
// It returns a string like "3 x book". Destructure the parameter.
// Log it for { product: "book", qty: 3 } and for { product: "pen" }.
// Expected: 3 x book
// Expected: 1 x pen

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 5 - Function overloads
// Write an overloaded function `double` with two call signatures:
//   - given a number, it returns that number times 2 (a number)
//   - given a string, it returns that string repeated twice (a string)
// Provide the implementation signature and body. Log double(7) and double("ab").
// Tip: declare the two signatures first, then one implementation.
// Expected: 14
// Expected: abab

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 6 - `this` and arrow callbacks
// Build an object `basket` with a `total: 0` field and a method `addAll` that
// takes a number array. Inside `addAll`, iterate the array with forEach and use
// an ARROW callback so `this` still refers to `basket`, adding each value to
// `this.total`. Call basket.addAll([10, 20, 5]) then log basket.total.
// Expected: 35

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 7 - Higher-order function returning a closure
// Write a function `makeAdder(step)` that returns a function taking no
// arguments; each call increases an internal running total by `step` and
// returns the new total. Create an adder with step 5, then log three calls
// on one line separated by spaces.
// Tip: the running total lives in a variable captured by the returned closure.
// Expected: 5 10 15

// TODO: your code here
