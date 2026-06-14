// O - Open/Closed Principle (OCP)
// -------------------------------
// "Software entities should be open for extension, but closed for
// modification."
// You should be able to add new behaviour WITHOUT editing existing, tested code
// -
// usually by adding a new type rather than a new `if`/`case` branch.

// BAD: every new shape forces you to edit (and risk breaking) this function.
type BadShape = { kind: "circle"; r: number } | { kind: "square"; s: number };
function badArea(shape: BadShape): number {
  if (shape.kind === "circle") return Math.PI * shape.r ** 2;
  if (shape.kind === "square") return shape.s ** 2;
  // ...add a triangle? You must come back and modify this function.
  return 0;
}
// -> 9
console.log(Math.round(badArea({ kind: "square", s: 3 })));

// GOOD: define an abstraction; each shape supplies its own area(). The consumer
// is CLOSED to modification but the system is OPEN to new shapes.
interface Shape {
  area(): number;
}
class Circle implements Shape {
  constructor(private r: number) {}
  area(): number {
    return Math.PI * this.r ** 2;
  }
}
class Square implements Shape {
  constructor(private s: number) {}
  area(): number {
    return this.s ** 2;
  }
}

function totalArea(shapes: Shape[]): number {
  return shapes.reduce((sum, shape) => sum + shape.area(), 0);
}
// -> 7
console.log(Math.round(totalArea([new Circle(1), new Square(2)])));

// Adding a Triangle requires NO change to totalArea - just a new class.
class Triangle implements Shape {
  constructor(
    private base: number,
    private height: number,
  ) {}
  area(): number {
    return (this.base * this.height) / 2;
  }
}
// -> 6
console.log(totalArea([new Triangle(4, 3)]));
