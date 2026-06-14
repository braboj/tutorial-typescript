// Abstract Classes & implementing Interfaces
// ------------------------------------------
// An abstract class can't be instantiated directly; it defines a contract plus
// shared code for subclasses. `abstract` methods must be implemented by
// children.

abstract class Shape {
  abstract area(): number; // no body - subclasses must provide one

  // Concrete method shared by all shapes:
  describe(): string {
    return `This shape has area ${this.area().toFixed(2)}`;
  }
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }
  area(): number {
    return Math.PI * this.radius ** 2;
  }
}

// new Shape(); // Error: Cannot create an instance of an abstract class.
const c = new Circle(2);
// -> This shape has area 12.57
console.log(c.describe());

// Interfaces describe a contract WITHOUT any implementation. A class can
// `implements` one or many.
interface Serializable {
  toJSON(): string;
}
interface Comparable<T> {
  compareTo(other: T): number;
}

class Money implements Serializable, Comparable<Money> {
  constructor(public cents: number) {}
  toJSON(): string {
    return JSON.stringify({ cents: this.cents });
  }
  compareTo(other: Money): number {
    return this.cents - other.cents;
  }
}

const m = new Money(500);
// -> {"cents":500}
console.log(m.toJSON());
// -> 200
console.log(m.compareTo(new Money(300)));
