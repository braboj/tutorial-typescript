// math-utils.ts - a module that provides several NAMED exports.
// A "module" is just a file with at least one import or export. Each module has
// its own scope; nothing leaks globally.

export const PI = 3.14159;

export function add(a: number, b: number): number {
  return a + b;
}

export function circleArea(radius: number): number {
  return PI * radius ** 2;
}

// You can export types too:
export interface Vector2 {
  x: number;
  y: number;
}

// A non-exported (module-private) helper - invisible to importers:
function square(n: number): number {
  return n * n;
}

export function magnitude(v: Vector2): number {
  return Math.sqrt(square(v.x) + square(v.y));
}
