// Access Modifiers
// ----------------
// public (default), private, and protected control who can access a member.
// TypeScript also supports JavaScript's native #private fields.

class BankAccount {
  public readonly owner: string; // visible everywhere, can't be reassigned
  private balance: number; // visible only inside this class
  #pin: string; // runtime-private (true JS private)

  constructor(owner: string, pin: string) {
    this.owner = owner;
    this.balance = 0;
    this.#pin = pin;
  }

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("amount must be positive");
    this.balance += amount;
  }

  checkBalance(pin: string): number {
    if (pin !== this.#pin) throw new Error("wrong pin");
    return this.balance;
  }
}

const acc = new BankAccount("Ada", "1234");
acc.deposit(100);
// -> Ada
console.log(acc.owner);
// -> 100
console.log(acc.checkBalance("1234"));

// acc.balance;       // Error: 'balance' is private.
// acc.#pin; // SyntaxError: private field not accessible outside class.
// `private` is enforced at compile time; `#private` is enforced at runtime too.
