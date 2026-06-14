// I - Interface Segregation Principle (ISP)
// -----------------------------------------
// "Clients should not be forced to depend on methods they do not use." Prefer
// many small, focused interfaces over one large "fat" interface. A fat
// interface
// forces implementers to stub out methods that make no sense for them.

// BAD: a fat interface. A simple printer is forced to implement scan() and
// fax()
// it cannot support - usually by throwing, which is a landmine for callers.
interface AllInOneMachine {
  print(doc: string): string;
  scan(): string;
  fax(doc: string): string;
}
class CheapPrinter implements AllInOneMachine {
  print(doc: string): string {
    return `printing ${doc}`;
  }
  scan(): string {
    throw new Error("this printer cannot scan"); // smell!
  }
  fax(doc: string): string {
    throw new Error("this printer cannot fax"); // smell!
  }
}
// -> printing a.pdf
console.log(new CheapPrinter().print("a.pdf"));

// GOOD: split into role interfaces. Each device implements only what it
// supports.
interface Printer {
  print(doc: string): string;
}
interface Scanner {
  scan(): string;
}

class SimplePrinter implements Printer {
  print(doc: string): string {
    return `printing ${doc}`;
  }
}
// A multifunction device opts into multiple small interfaces:
class OfficeMachine implements Printer, Scanner {
  print(doc: string): string {
    return `printing ${doc}`;
  }
  scan(): string {
    return "scanned page";
  }
}

// Functions depend only on the narrow capability they actually need:
function printDocument(p: Printer, doc: string): void {
  console.log(p.print(doc));
}
// -> printing report.pdf
printDocument(new SimplePrinter(), "report.pdf");
// -> printing memo.pdf
printDocument(new OfficeMachine(), "memo.pdf");
// -> scanned page
console.log(new OfficeMachine().scan());
