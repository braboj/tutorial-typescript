// Async Resource Management: `await using`
// ----------------------------------------
// Some resources need ASYNCHRONOUS cleanup (closing a DB connection, flushing a
// stream). For those, implement [Symbol.asyncDispose]() (the AsyncDisposable
// interface) and use `await using`, which awaits disposal at end of scope.

class DbConnection implements AsyncDisposable {
  constructor(public readonly id: number) {
    console.log(`connect #${id}`);
  }
  async query(sql: string): Promise<string> {
    return `result(${sql})`;
  }
  // Awaited automatically when the scope ends:
  async [Symbol.asyncDispose](): Promise<void> {
    console.log(`disconnect #${this.id}`);
  }
}

async function main(): Promise<void> {
  await using conn = new DbConnection(1);
  console.log(await conn.query("SELECT 1"));
  console.log("doing work...");
  // `await using` awaits conn[Symbol.asyncDispose]() right here, at scope exit.
}

// Prints "connect #1", the query result, "doing work...", then "disconnect #1"
// once the awaited disposal runs at scope exit.
await main();

// This pattern guarantees connections/files/locks are released exactly once,
// in the right order, without sprinkling try/finally everywhere.
