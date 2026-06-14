// Decorator (Structural)
// ----------------------
// Adds behaviour to an object by WRAPPING it in another object that shares the
// same interface. Wrappers can be stacked, composing behaviour at runtime -
// a flexible alternative to subclassing for every combination.
//
// (Note: this is the structural PATTERN. It is different from TypeScript's
//  `@decorator` SYNTAX, which is a separate language feature.)

interface Coffee {
  cost(): number;
  description(): string;
}

// The base component:
class Espresso implements Coffee {
  cost(): number {
    return 2.0;
  }
  description(): string {
    return "espresso";
  }
}

// A base decorator wraps another Coffee and forwards to it by default.
abstract class CoffeeDecorator implements Coffee {
  constructor(protected inner: Coffee) {}
  abstract cost(): number;
  abstract description(): string;
}

class WithMilk extends CoffeeDecorator {
  cost(): number {
    return this.inner.cost() + 0.5;
  }
  description(): string {
    return `${this.inner.description()} + milk`;
  }
}
class WithSugar extends CoffeeDecorator {
  cost(): number {
    return this.inner.cost() + 0.2;
  }
  description(): string {
    return `${this.inner.description()} + sugar`;
  }
}

// Stack decorators to compose behaviour - no combinatorial subclass explosion.
let order: Coffee = new Espresso();
order = new WithMilk(order);
order = new WithSugar(order);

// -> espresso + milk + sugar
console.log(order.description());
// -> 2.7
console.log(order.cost().toFixed(1));
