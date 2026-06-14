// Abstraction
// -----------
// Abstraction = exposing a SIMPLE interface while hiding COMPLEX internals.
// Users of a type should think about *what* it does, not *how*.
//
// Encapsulation is the mechanism (hiding); abstraction is the goal (a clean,
// minimal surface). An interface is abstraction in its purest form.

// The abstraction: what a coffee machine can do, with no hint of how.
interface CoffeeMachine {
  brew(cups: number): string;
}

// The implementation hides a lot of fiddly internal steps behind brew().
class EspressoMachine implements CoffeeMachine {
  private waterMl = 1000;

  brew(cups: number): string {
    this.heatWater();
    this.grindBeans();
    const needed = cups * 30;
    if (needed > this.waterMl) throw new Error("not enough water");
    this.waterMl -= needed;
    return `Brewed ${cups} cup(s) of espresso`;
  }

  // Private steps the caller never needs to know about:
  private heatWater(): void {}
  private grindBeans(): void {}
}

// Callers depend only on the abstraction, so the machine can be swapped freely.
function morningRoutine(machine: CoffeeMachine): void {
  console.log(machine.brew(2));
}

// -> Brewed 2 cup(s) of espresso
morningRoutine(new EspressoMachine());

// Because code depends on CoffeeMachine (not EspressoMachine), a test or a new
// model can substitute its own implementation without changing morningRoutine.
class FakeMachine implements CoffeeMachine {
  brew(cups: number): string {
    return `(fake) ${cups} cups`;
  }
}
// -> (fake) 2 cups
morningRoutine(new FakeMachine());
