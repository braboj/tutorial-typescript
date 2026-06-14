// Resource Management: `using` and Symbol.dispose
// -----------------------------------------------
// TypeScript 5.2's `using` declaration gives deterministic cleanup, like
// Python's `with` or C#'s `using`. When a `using` variable goes out of scope,
// its [Symbol.dispose]() method runs automatically - even if an error is
// thrown.
// A type with that method is `Disposable`.

class FileHandle implements Disposable {
  constructor(public readonly name: string) {
    console.log(`open ${name}`);
  }
  read(): string {
    return `contents of ${this.name}`;
  }
  // Called automatically at end of scope:
  [Symbol.dispose](): void {
    console.log(`close ${this.name}`);
  }
}

function readFile(): void {
  using file = new FileHandle("data.txt");
  console.log(file.read());
  // No manual close() - disposal happens here, when `file` leaves scope.
}

// Prints "open data.txt", the file contents, then "close data.txt" as the
// scope exits.
readFile();

// Multiple resources are disposed in REVERSE order (last opened, first closed).
// Prints both opens, the combined names, then closes b.txt before a.txt:
function readTwo(): void {
  using a = new FileHandle("a.txt");
  using b = new FileHandle("b.txt");
  console.log(`${a.name} + ${b.name}`);
}
readTwo();

// Disposal also runs when the scope exits via an error - guaranteeing cleanup.
// Prints the open, then "close locked.txt", then the caught "boom" message:
function readThenThrow(): void {
  using file = new FileHandle("locked.txt");
  throw new Error("boom");
}
try {
  readThenThrow();
} catch (e) {
  console.log("caught:", (e as Error).message);
}
