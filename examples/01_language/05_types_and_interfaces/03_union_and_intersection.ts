// Union and Intersection Types
// ----------------------------
// Union (A | B): a value is EITHER A or B.
// Intersection (A & B): a value is BOTH A and B at once.

type Id = string | number; // union
function format(id: Id): string {
  return `ID:${id}`;
}
// -> ID:7
console.log(format(7));
// -> ID:abc
console.log(format("abc"));

// You can only use members common to ALL union members until you narrow:
function describe(x: string | string[]): number {
  return x.length; // both string and string[] have .length, so this is allowed
}
// -> 5
console.log(describe("hello"));
// -> 2
console.log(describe(["a", "b"]));

// Intersection merges object types:
type Timestamps = { createdAt: string };
type Identifiable = { id: number };
type Entity = Identifiable & Timestamps;

const record: Entity = { id: 1, createdAt: "2024-01-01" };
// -> { id: 1, createdAt: '2024-01-01' }
console.log(record);

// Discriminated unions are the idiomatic way to model "one of several shapes":
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; side: number };

function areaOf(s: Shape): number {
  // The shared "kind" field lets TypeScript narrow safely:
  return s.kind === "circle" ? Math.PI * s.radius ** 2 : s.side ** 2;
}
// -> 9
console.log(areaOf({ kind: "square", side: 3 }));
