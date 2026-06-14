// Literal Types
// -------------
// A literal type is a single, exact value used as a type. Combined with unions,
// they replace many uses of enums and "magic strings".

type Direction = "north" | "south" | "east" | "west";

function move(d: Direction): string {
  return `Moving ${d}`;
}
// -> Moving north
console.log(move("north"));
// move("up");             // Error: "up" is not assignable to type 'Direction'.

// Numeric and boolean literals work too:
type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;
const roll: DiceRoll = 4;
// -> 4
console.log(roll);

// Literal types pair naturally with discriminated unions and with `as const`:
const HTTP_METHODS = ["GET", "POST", "PUT", "DELETE"] as const;
type HttpMethod = (typeof HTTP_METHODS)[number];
// "GET" | "POST" | "PUT" | "DELETE"

const method: HttpMethod = "POST";
// -> POST
console.log(method);
