// Variance: Covariance & Contravariance
// -------------------------------------
// Variance is the rulebook for one question: "if A is assignable to B, when is
// Wrapper<A> assignable to Wrapper<B>?" It is rarely taught explicitly, which is
// exactly why it produces bugs that feel impossible. The function-parameter rule
// below surprises almost everyone.

class Animal {
  constructor(public name: string) {}
}
class Dog extends Animal {
  bark(): string {
    return "woof";
  }
}

// COVARIANCE (the intuitive one): a Dog IS an Animal, so a Dog[] is usable as an
// Animal[], and a producer-of-Dog is a producer-of-Animal. Subtyping flows in the
// SAME direction as the values.
const dogs: Dog[] = [new Dog("Rex")];
const animals: Animal[] = dogs; // OK: Dog[] assignable to Animal[]
console.log(animals[0]?.name); // -> Rex

// CONTRAVARIANCE (the counterintuitive one): for FUNCTION PARAMETERS the direction
// REVERSES. A function that accepts any Animal is safe wherever a function
// accepting a Dog is expected - it already handles Dogs, and more.
type Handler<T> = (value: T) => void;
const handleAnimal: Handler<Animal> = (a) => console.log(`handle ${a.name}`);
const handleDog: Handler<Dog> = handleAnimal; // OK: an Animal-handler accepts Dogs
handleDog(new Dog("Fido")); // -> handle Fido

// The REVERSE is unsafe and (with `strictFunctionTypes`, part of `strict`) it is
// REJECTED: a Dog-handler might call `.bark()`, but could be handed a plain Animal.
//   const bad: Handler<Animal> = handleDog; // Error: not assignable

// THE classic unsoundness hole: arrays are covariant AND mutable, which together
// are not actually type-safe. TypeScript permits it for ergonomics - know it's a
// hole you can fall through.
const asAnimals: Animal[] = dogs; // allowed...
asAnimals.push(new Animal("Whiskers")); // ...now a non-Dog lives inside dogs!
console.log(dogs.length); // -> 2  (a plain Animal hid inside a Dog[])

// Takeaway: outputs/producers are covariant; inputs/consumers (function params)
// are contravariant. When a type "should" assign but won't, variance is usually
// the reason.
