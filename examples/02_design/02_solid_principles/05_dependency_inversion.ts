// D - Dependency Inversion Principle (DIP)
// ----------------------------------------
// "Depend on abstractions, not on concretions." High-level policy should not
// depend on low-level details; both should depend on an interface. This is what
// makes code testable and swappable (databases, mailers, clients, ...).

// BAD: the high-level OrderService is hard-wired to a concrete MySqlDatabase.
// You cannot test it without a real database, nor swap the storage.
class MySqlDatabase {
  save(data: string): void {
    /* talk to MySQL */
  }
}
class TightlyCoupledOrderService {
  private db = new MySqlDatabase(); // <- baked-in dependency
  placeOrder(item: string): void {
    this.db.save(item);
  }
}

// GOOD: define an abstraction the high-level code depends on. Concrete stores
// implement it and are INJECTED. The dependency arrow now points at the
// interface.
interface OrderStore {
  save(order: string): void;
  all(): string[];
}

class InMemoryOrderStore implements OrderStore {
  private orders: string[] = [];
  save(order: string): void {
    this.orders.push(order);
  }
  all(): string[] {
    return this.orders;
  }
}

class OrderService {
  // Depends on the OrderStore abstraction, not a concrete database.
  constructor(private store: OrderStore) {}
  placeOrder(item: string): void {
    this.store.save(item);
  }
}

// In production you'd inject a real DB-backed store; in tests, a fake one.
const store = new InMemoryOrderStore();
const service = new OrderService(store);
service.placeOrder("keyboard");
service.placeOrder("mouse");
// -> [ 'keyboard', 'mouse' ]
console.log(store.all());

// Swapping implementations needs no change to OrderService - just inject
// another
// OrderStore. That is the payoff of inverting the dependency.
