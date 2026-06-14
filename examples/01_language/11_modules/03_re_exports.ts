// Re-exports / Barrel Modules
// ---------------------------
// A "barrel" gathers many modules behind one file, so consumers write a single
// import. See shapes.ts for how the re-exports are declared.

import { circleArea, rectangleArea, magnitude, Logger } from "./shapes.js";
import type { Vector2 } from "./shapes.js";

// -> 3.14
console.log(circleArea(1).toFixed(2));
// -> 12
console.log(rectangleArea(3, 4));

const v: Vector2 = { x: 6, y: 8 };
// -> 10
console.log(magnitude(v));

const log = new Logger("barrel");
// -> [barrel] INFO: imported everything from one file
log.log("info", "imported everything from one file");

// Trade-off: barrels are convenient but can hurt tree-shaking and create import
// cycles in large apps. Use them deliberately, not everywhere.
