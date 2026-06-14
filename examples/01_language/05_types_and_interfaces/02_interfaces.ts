// Interfaces
// ----------
// An interface describes the shape of an object. It is similar to a `type`
// alias for an object, but it can be extended and "reopened".

interface Animal {
  name: string;
  legs: number;
  speak(): string; // method signature
}

const dog: Animal = {
  name: "Rex",
  legs: 4,
  speak: () => "Woof",
};
// -> Rex Woof
console.log(dog.name, dog.speak());

// Interfaces extend other interfaces:
interface Pet extends Animal {
  owner: string;
}

const cat: Pet = { name: "Mimi", legs: 4, owner: "Ada", speak: () => "Meow" };
// -> Ada Meow
console.log(cat.owner, cat.speak());

// type vs interface:
//   - Use `interface` for object shapes you might extend (especially public
//   APIs).
//   - Use `type` for unions, tuples, primitives, and complex compositions.
// They overlap a lot; pick one and stay consistent.

// Interfaces can also describe functions and indexable types:
interface StringMap {
  [key: string]: string;
}
const env: StringMap = { HOME: "/root" };
// -> /root
console.log(env.HOME);
