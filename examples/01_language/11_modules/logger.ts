// logger.ts - a module with a DEFAULT export plus a named export.
// A module may have at most ONE default export. Use it for "the main thing"
// the module provides.

export type Level = "info" | "warn" | "error";

// The default export (here, a class):
export default class Logger {
  constructor(private prefix: string) {}

  log(level: Level, message: string): void {
    console.log(`[${this.prefix}] ${level.toUpperCase()}: ${message}`);
  }
}

// A named export alongside the default:
export function createConsoleLogger(): Logger {
  return new Logger("app");
}
