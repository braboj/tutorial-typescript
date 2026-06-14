// Named Imports
// -------------
// Import named exports inside { }. Note the ".js" extension in the path: under
// modern Node ESM you reference the OUTPUT file name, even though the source is
// ".ts". tsx and tsc both understand this.

import { add, circleArea, PI } from "./math-utils.js";
// Importing only a TYPE? Use `import type` (required by verbatimModuleSyntax):
import type { Vector2 } from "./math-utils.js";
import { magnitude } from "./math-utils.js";

// -> 3.14159
console.log(PI);
// -> 5
console.log(add(2, 3));
// -> 12.57
console.log(circleArea(2).toFixed(2));

const v: Vector2 = { x: 3, y: 4 };
// -> 5
console.log(magnitude(v));

// Rename on import with `as` to avoid clashes -> 30
import { add as sum } from "./math-utils.js";
console.log(sum(10, 20));

// Import everything as a namespace object -> 2
import * as MathUtils from "./math-utils.js";
console.log(MathUtils.add(1, 1));
