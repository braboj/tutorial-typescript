// Strategy (Behavioural)
// ----------------------
// Defines a family of interchangeable algorithms and lets you select one at
// runtime. The context delegates the work to whichever strategy it holds, so
// new
// algorithms can be added without touching the context.

// Each strategy is just a function with a common signature (idiomatic in TS):
type SortStrategy = (a: number, b: number) => number;

const ascending: SortStrategy = (a, b) => a - b;
const descending: SortStrategy = (a, b) => b - a;
const byAbsValue: SortStrategy = (a, b) => Math.abs(a) - Math.abs(b);

// The context is configured with a strategy and delegates to it.
class Sorter {
  constructor(private strategy: SortStrategy) {}
  setStrategy(strategy: SortStrategy): void {
    this.strategy = strategy;
  }
  sort(values: number[]): number[] {
    return [...values].sort(this.strategy);
  }
}

const data = [3, -1, 2, -5, 4];
const sorter = new Sorter(ascending);
// -> [ -5, -1, 2, 3, 4 ]
console.log(sorter.sort(data));

sorter.setStrategy(descending);
// -> [ 4, 3, 2, -1, -5 ]
console.log(sorter.sort(data));

sorter.setStrategy(byAbsValue);
// -> [ -1, 2, 3, 4, -5 ]
console.log(sorter.sort(data));

// Strategy turns sprawling if/else over "modes" into pluggable, testable
// pieces.
// In OO form, strategies are classes implementing a Strategy interface instead.
