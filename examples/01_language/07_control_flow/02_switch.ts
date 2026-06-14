// switch
// ------
// `switch` compares a value against cases using === . Don't forget `break`,
// or execution "falls through" to the next case.

function dayType(day: string): string {
  switch (day) {
    case "Sat":
    case "Sun": // intentional fall-through: both share one body
      return "weekend";
    case "Mon":
      return "ugh";
    default:
      return "weekday";
  }
}
// -> weekend
console.log(dayType("Sun"));
// -> ugh
console.log(dayType("Mon"));
// -> weekday
console.log(dayType("Wed"));

// noFallthroughCasesInSwitch (in tsconfig) would flag an accidental missing
// break, catching a classic bug class.

// switch shines with discriminated unions for exhaustive handling:
type Shape = { kind: "circle"; r: number } | { kind: "square"; s: number };

function area(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.r ** 2;
    case "square":
      return shape.s ** 2;
  }
}
// -> 16
console.log(area({ kind: "square", s: 4 }));
