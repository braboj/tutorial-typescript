// Inheritance
// -----------
// Inheritance models an "is-a" relationship: a subclass IS a specialized kind
// of
// its base class, reusing and extending its behaviour. (For the syntax basics -
// super, override - see ../../01_language/09_classes/03_inheritance.ts.)
//
// This file focuses on the DESIGN angle: what inheritance is good at, and its
// `protected` members shared with subclasses.

abstract class Employee {
  // protected = visible to this class AND subclasses, but not to outsiders.
  protected constructor(
    protected readonly name: string,
    protected baseSalary: number,
  ) {}

  // Shared behaviour every employee inherits:
  describe(): string {
    return `${this.name} earns ${this.monthlyPay()}/mo`;
  }

  // Each subclass specializes this:
  abstract monthlyPay(): number;
}

class Salaried extends Employee {
  constructor(name: string, annual: number) {
    super(name, annual);
  }
  monthlyPay(): number {
    return Math.round(this.baseSalary / 12);
  }
}

class Contractor extends Employee {
  constructor(
    name: string,
    private rate: number,
    private hours: number,
  ) {
    super(name, 0);
  }
  monthlyPay(): number {
    return this.rate * this.hours;
  }
}

const team: Employee[] = [
  new Salaried("Ada", 120000),
  new Contractor("Linus", 80, 160),
];
// Prints one pay line per employee: Ada earns 10000/mo, Linus earns 12800/mo.
for (const member of team) console.log(member.describe());

// Use inheritance when there is a genuine "is-a" relationship AND subclasses
// honour the base contract (see
// ../02_solid_principles/03_liskov_substitution.ts).
// When you only want to REUSE code, prefer composition (see 05).
