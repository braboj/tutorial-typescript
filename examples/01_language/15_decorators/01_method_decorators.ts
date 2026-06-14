// Decorators: Methods
// -------------------
// Decorators are functions that modify classes and their members at definition
// time. These are the STANDARD (TC39 / TypeScript 5) decorators - no
// `experimentalDecorators` flag needed. A decorator receives the thing it
// decorates plus a `context` object describing it.
//
// A method decorator can wrap the original method to add behaviour around it.

// A decorator FACTORY: takes config and returns the actual decorator.
function logged(label: string) {
  return function <This, Args extends unknown[], Return>(
    target: (this: This, ...args: Args) => Return,
    context: ClassMethodDecoratorContext<
      This,
      (this: This, ...args: Args) => Return
    >,
  ) {
    const name = String(context.name);
    // Return a replacement function that wraps the original:
    return function (this: This, ...args: Args): Return {
      console.log(`[${label}] ${name}(${args.join(", ")})`);
      return target.call(this, ...args);
    };
  };
}

class Calculator {
  @logged("calc")
  add(a: number, b: number): number {
    return a + b;
  }

  @logged("calc")
  multiply(a: number, b: number): number {
    return a * b;
  }
}

const calc = new Calculator();
// Logs the wrapped call then prints the result: "[calc] add(2, 3)" then 5.
console.log(calc.add(2, 3));
// Logs the wrapped call then prints the result: "[calc] multiply(4, 5)" then 20.
console.log(calc.multiply(4, 5));

// context also lets you run code when each instance is created, via
// addInitializer - handy for auto-binding `this` or registering hooks.
function bound<This, Args extends unknown[], Return>(
  target: (this: This, ...args: Args) => Return,
  context: ClassMethodDecoratorContext<
    This,
    (this: This, ...args: Args) => Return
  >,
) {
  context.addInitializer(function (this: This) {
    const self = this as Record<string, unknown>;
    const fn = (target as (...a: Args) => Return).bind(this);
    self[context.name as string] = fn;
  });
}

class Counter {
  count = 0;
  @bound
  increment(): number {
    return ++this.count;
  }
}
const inc = new Counter().increment;
// detached, but still bound to its instance -> 1
console.log(inc());
// -> 2
console.log(inc());
