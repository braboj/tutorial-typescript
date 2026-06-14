// Classes: Basics
// ---------------
// A class is a blueprint for objects. It declares fields (data) and methods
// (behaviour), and you create instances with `new`.

class Point {
  // Field declarations with types:
  x: number;
  y: number;

  // The constructor runs when you write `new Point(...)`:
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  // A method:
  distanceTo(other: Point): number {
    const dx = this.x - other.x;
    const dy = this.y - other.y;
    return Math.sqrt(dx * dx + dy * dy);
  }

  toString(): string {
    return `(${this.x}, ${this.y})`;
  }
}

const a = new Point(0, 0);
const b = new Point(3, 4);
// -> (0, 0)
console.log(a.toString());
// -> 5
console.log(a.distanceTo(b));
