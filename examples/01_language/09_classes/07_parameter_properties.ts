// Parameter Properties
// --------------------
// A TypeScript shortcut: add an access modifier to a constructor parameter and
// TypeScript declares AND assigns the field for you. This removes boilerplate.

// Verbose version:
class PointVerbose {
  readonly x: number;
  readonly y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

// Equivalent, using parameter properties:
class Point {
  constructor(
    public readonly x: number,
    public readonly y: number,
  ) {}
  // No constructor body needed - the fields are created and assigned
  // automatically.
}

const p = new Point(3, 4);
// -> 3 4
console.log(p.x, p.y);

// Mix parameter properties with regular parameters:
class User {
  constructor(
    public readonly id: number,
    public name: string,
    private password: string, // becomes a private field
  ) {}

  authenticate(attempt: string): boolean {
    return attempt === this.password;
  }
}

const user = new User(1, "Ada", "s3cret");
// -> 1 Ada
console.log(user.id, user.name);
// -> true
console.log(user.authenticate("s3cret"));
// Verify both classes produce the same shape -> 1
console.log(new PointVerbose(1, 2).x);
