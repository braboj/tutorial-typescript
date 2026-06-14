// Generic Repository
// ------------------
// A repository hides WHERE data lives behind a uniform CRUD interface, so callers
// (and tests) depend on the interface, not the storage engine. Generics let ONE
// implementation serve ANY entity while the type system keeps each store honest.
// This is the Dependency Inversion Principle (see ../02_solid_principles/05_*)
// made reusable.

// Every stored entity must at least expose an id we can key on.
interface Entity {
  id: number;
}

interface Repository<T extends Entity> {
  add(item: T): T;
  get(id: number): T | undefined;
  all(): readonly T[];
  remove(id: number): boolean;
}

// One generic implementation, reusable for every entity type.
class InMemoryRepository<T extends Entity> implements Repository<T> {
  private readonly items = new Map<number, T>();

  add(item: T): T {
    this.items.set(item.id, item);
    return item;
  }
  get(id: number): T | undefined {
    return this.items.get(id);
  }
  all(): readonly T[] {
    return [...this.items.values()];
  }
  remove(id: number): boolean {
    return this.items.delete(id);
  }
}

// Concrete entities just extend Entity; the repo is reused with no new code.
interface User extends Entity {
  name: string;
}

const users: Repository<User> = new InMemoryRepository<User>();
users.add({ id: 1, name: "Ada" });
users.add({ id: 2, name: "Linus" });
console.log(users.get(1)?.name); // -> Ada
console.log(users.all().length); // -> 2
console.log(users.remove(2)); // -> true
console.log(users.all().map((u) => u.name)); // -> [ 'Ada' ]

// Swap InMemoryRepository for a SqlRepository<User> implementing the SAME
// interface and not one caller changes - the generic contract is the seam that
// makes storage pluggable and the domain logic testable.
