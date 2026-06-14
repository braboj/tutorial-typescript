// L - Liskov Substitution Principle (LSP)
// ---------------------------------------
// "Subtypes must be substitutable for their base type." Any code that works
// with
// the base type must keep working when given a subtype - without surprises. A
// subclass that breaks the base class's contract violates LSP.

// The classic violation: a Square "is a" Rectangle mathematically, but a
// mutable
// Square breaks Rectangle's contract that width and height vary independently.
class Rectangle {
  constructor(
    protected width: number,
    protected height: number,
  ) {}
  setWidth(w: number): void {
    this.width = w;
  }
  setHeight(h: number): void {
    this.height = h;
  }
  area(): number {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  // To stay square, setting width must also change height - violating the
  // expectation that they are independent.
  override setWidth(w: number): void {
    this.width = w;
    this.height = w;
  }
  override setHeight(h: number): void {
    this.width = h;
    this.height = h;
  }
}

// Code written against Rectangle now behaves wrongly for a Square:
function resizeAndCheck(rect: Rectangle): number {
  rect.setWidth(5);
  rect.setHeight(4);
  return rect.area(); // a Rectangle returns 20...
}
// -> 20
console.log(resizeAndCheck(new Rectangle(0, 0)));
// -> 16  <- surprise! LSP broken
console.log(resizeAndCheck(new Square(0, 0)));

// FIX: don't force a false "is-a". Model shapes as immutable values with a
// shared
// read-only contract; resizing returns a NEW object instead of mutating.
interface Shape {
  area(): number;
}
class ImmutableRectangle implements Shape {
  constructor(
    readonly width: number,
    readonly height: number,
  ) {}
  area(): number {
    return this.width * this.height;
  }
}
class ImmutableSquare implements Shape {
  constructor(readonly side: number) {}
  area(): number {
    return this.side ** 2;
  }
}
const shapes: Shape[] = [new ImmutableRectangle(5, 4), new ImmutableSquare(4)];
// -> [ 20, 16 ]  (both correct)
console.log(shapes.map((s) => s.area()));
