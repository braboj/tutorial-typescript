// Encapsulation
// -------------
// Encapsulation = bundling data with the behaviour that operates on it, and
// hiding the internals so they can only change through a controlled interface.
// This protects invariants (rules that must always hold).

// BAD: a plain object exposes its internals; any code can corrupt it.
const looseAccount = { balance: 0 };
looseAccount.balance = -9999; // nothing stops this nonsense

// GOOD: the class owns its data and enforces the rules.
class Account {
  // #balance is truly private (runtime-enforced). No outside code can touch it.
  #balance: number;

  constructor(initial: number) {
    if (initial < 0) throw new Error("initial balance cannot be negative");
    this.#balance = initial;
  }

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("deposit must be positive");
    this.#balance += amount;
  }

  withdraw(amount: number): void {
    if (amount > this.#balance) throw new Error("insufficient funds");
    this.#balance -= amount;
  }

  // Expose state read-only via a getter - callers can read, not corrupt.
  get balance(): number {
    return this.#balance;
  }
}

const acc = new Account(100);
acc.deposit(50);
acc.withdraw(30);
// -> 120
console.log(acc.balance);

try {
  acc.withdraw(1000); // invariant "never overdraw" is protected
} catch (e) {
  // -> insufficient funds
  console.log((e as Error).message);
}

// The invariant holds no matter what callers do - that is the whole point. -> 120
console.log(acc.balance);
