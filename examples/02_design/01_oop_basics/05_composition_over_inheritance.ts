// Composition over Inheritance
// ----------------------------
// A widely-cited guideline: prefer building objects from smaller parts
// (composition, "has-a") over deep class hierarchies (inheritance, "is-a").
// Inheritance is rigid - it locks behaviour in at class-definition time and
// forces a single tree. Composition mixes capabilities flexibly.

// The inheritance trap: what about a robot duck that doesn't quack and DOES
// fly?
// A class tree forces awkward overrides and duplicated code. Compose instead.

// Small, independent behaviours (strategies):
interface FlyBehaviour {
  fly(): string;
}
interface QuackBehaviour {
  quack(): string;
}

const flyWithWings: FlyBehaviour = { fly: () => "flying" };
const cannotFly: FlyBehaviour = { fly: () => "cannot fly" };
const normalQuack: QuackBehaviour = { quack: () => "Quack!" };
const muteQuack: QuackBehaviour = { quack: () => "..." };

// The Duck is COMPOSED of behaviours injected at construction time.
class Duck {
  constructor(
    private flyBehaviour: FlyBehaviour,
    private quackBehaviour: QuackBehaviour,
  ) {}

  perform(): string {
    return `${this.flyBehaviour.fly()} / ${this.quackBehaviour.quack()}`;
  }

  // Behaviour can even be swapped at RUNTIME - impossible with inheritance.
  setFlyBehaviour(b: FlyBehaviour): void {
    this.flyBehaviour = b;
  }
}

const mallard = new Duck(flyWithWings, normalQuack);
const rubberDuck = new Duck(cannotFly, muteQuack);
// -> flying / Quack!
console.log(mallard.perform());
// -> cannot fly / ...
console.log(rubberDuck.perform());

const modelDuck = new Duck(cannotFly, normalQuack);
modelDuck.setFlyBehaviour(flyWithWings); // upgrade mid-flight, so to speak
// -> flying / Quack!
console.log(modelDuck.perform());
