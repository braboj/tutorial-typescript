// Static Members
// --------------
// `static` members belong to the CLASS itself, not to instances. Use them for
// constants, factory methods, and counters shared across all instances.

class Circle {
  static readonly PI = 3.14159; // shared constant
  static count = 0; // shared state

  constructor(public radius: number) {
    Circle.count++; // track how many were created
  }

  // Static factory method:
  static unit(): Circle {
    return new Circle(1);
  }

  area(): number {
    return Circle.PI * this.radius ** 2;
  }
}

// -> 3.14159
console.log(Circle.PI);
const u = Circle.unit();
const big = new Circle(10);
// -> 3.14
console.log(u.area().toFixed(2));
// -> 2
console.log(Circle.count);

// Static members are accessed via the class name, not an instance:
// u.PI;        // Error: 'PI' is a static member of type 'Circle'.
// -> 2
console.log(Circle.count);
