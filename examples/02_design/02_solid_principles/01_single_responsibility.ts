// S - Single Responsibility Principle (SRP)
// -----------------------------------------
// "A class should have only one reason to change." Each module should do one
// job.
// Mixing unrelated jobs makes code fragile: a change to one concern risks
// breaking the others, and the class becomes hard to test and reuse.

// BAD: this class formats an invoice, AND persists it, AND emails it. Three
// reasons to change (layout, database, mail provider) all tangled together.
class FatInvoice {
  constructor(
    public id: number,
    public total: number,
  ) {}
  format(): string {
    return `Invoice #${this.id}: $${this.total}`;
  }
  saveToDb(): void {
    /* SQL... */
  }
  emailToCustomer(): void {
    /* SMTP... */
  }
}

// GOOD: split into focused units, each with a single responsibility.
class Invoice {
  constructor(
    public readonly id: number,
    public readonly total: number,
  ) {}
}

class InvoiceFormatter {
  format(invoice: Invoice): string {
    return `Invoice #${invoice.id}: $${invoice.total}`;
  }
}

class InvoiceRepository {
  private store: Invoice[] = [];
  save(invoice: Invoice): void {
    this.store.push(invoice);
  }
  count(): number {
    return this.store.length;
  }
}

const invoice = new Invoice(1001, 250);
const formatter = new InvoiceFormatter();
const repo = new InvoiceRepository();

// -> Invoice #1001: $250
console.log(formatter.format(invoice));
repo.save(invoice);
// -> 1
console.log(repo.count());

// Now changing the layout touches only InvoiceFormatter; changing storage
// touches only InvoiceRepository. One reason to change each.
// (shown only for contrast) -> Invoice #1: $9
console.log(new FatInvoice(1, 9).format());
