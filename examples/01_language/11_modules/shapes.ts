// shapes.ts - a "barrel" module that RE-EXPORTS from other modules so consumers
// have a single import point.

// Re-export selected named exports from another module:
export { circleArea, magnitude } from "./math-utils.js";

// Re-export a type explicitly as a type (required by verbatimModuleSyntax):
export type { Vector2 } from "./math-utils.js";

// Re-export a default under a new name:
export { default as Logger } from "./logger.js";

// You can also add new exports of your own:
export function rectangleArea(w: number, h: number): number {
  return w * h;
}
