// Adapter (Structural)
// --------------------
// Wraps an existing class so its incompatible interface matches the one your
// code
// expects. Think of a travel power-plug adapter: it bridges two interfaces
// without changing either side.

// Our app speaks this interface everywhere:
interface Logger {
  log(message: string): void;
}

// A third-party library we can't modify, with a different shape:
class ThirdPartyConsole {
  writeLine(prefix: string, text: string): void {
    console.log(`${prefix}> ${text}`);
  }
}

// The adapter implements OUR interface and translates calls to THEIR API.
class ConsoleLoggerAdapter implements Logger {
  constructor(private external: ThirdPartyConsole) {}
  log(message: string): void {
    this.external.writeLine("LOG", message); // adapt the call
  }
}

// App code depends only on Logger; it never sees the third-party shape.
function runApp(logger: Logger): void {
  logger.log("application started");
}

// -> LOG> application started
runApp(new ConsoleLoggerAdapter(new ThirdPartyConsole()));

// Swapping the third-party lib later means writing a new adapter - app code is
// untouched. Adapters keep external dependencies at arm's length.
