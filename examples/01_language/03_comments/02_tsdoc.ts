// TSDoc
// -----
// TSDoc comments (/** ... */) document APIs. Editors show them on hover, and
// tools like TypeDoc turn them into documentation sites.

/**
 * Calculates the area of a rectangle.
 *
 * @param width  - The width in metres.
 * @param height - The height in metres.
 * @returns The area in square metres.
 *
 * @example
 * ```ts
 * area(3, 4); // 12
 * ```
 */
function area(width: number, height: number): number {
  return width * height;
}

// -> 12
console.log(area(3, 4));

/**
 * A point in 2D space.
 * @remarks Coordinates are immutable once created.
 */
interface Point {
  /** Horizontal position. */
  readonly x: number;
  /** Vertical position. */
  readonly y: number;
}

const origin: Point = { x: 0, y: 0 };
// -> { x: 0, y: 0 }
console.log(origin);
