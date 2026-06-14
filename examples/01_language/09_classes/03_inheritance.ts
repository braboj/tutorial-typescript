// Inheritance
// -----------
// A subclass `extends` a base class, inheriting its members and optionally
// overriding them. `super` calls the parent's constructor or methods.

class Animal {
  constructor(public name: string) {}

  speak(): string {
    return `${this.name} makes a sound`;
  }
}

class Dog extends Animal {
  constructor(
    name: string,
    public breed: string,
  ) {
    super(name); // must call the parent constructor first
  }

  // `override` (enforced by noImplicitOverride) documents intentional
  // overrides:
  override speak(): string {
    return `${this.name} barks`;
  }

  fetch(): string {
    // Call the parent's version with super:
    return `${super.speak()} ... then fetches`;
  }
}

const d = new Dog("Rex", "Labrador");
// -> Rex barks
console.log(d.speak());
// -> Rex makes a sound ... then fetches
console.log(d.fetch());
// -> Labrador
console.log(d.breed);

// A Dog "is an" Animal. Prints one line per animal: "Generic makes a sound"
// then "Fido barks":
const animals: Animal[] = [new Animal("Generic"), new Dog("Fido", "Pug")];
for (const a of animals) console.log(a.speak());
