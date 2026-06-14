// Logging (starter)
// -----------------
// Good logging is structured and leveled. This section will cover log levels,
// structured (JSON) logs, and popular libraries (pino, winston). Below is a
// tiny dependency-free leveled logger.

type Level = "debug" | "info" | "warn" | "error";
type Meta = Record<string, unknown>;
const ORDER: Record<Level, number> = { debug: 0, info: 1, warn: 2, error: 3 };

class Logger {
  constructor(private min: Level = "info") {}

  private emit(level: Level, msg: string, meta?: Meta): void {
    if (ORDER[level] < ORDER[this.min]) return; // filter below threshold
    // Structured output is easy to parse by log aggregators:
    const entry = { level, msg, ...meta };
    console.log(JSON.stringify(entry));
  }

  debug = (m: string, meta?: Meta) => this.emit("debug", m, meta);
  info = (m: string, meta?: Meta) => this.emit("info", m, meta);
  warn = (m: string, meta?: Meta) => this.emit("warn", m, meta);
  error = (m: string, meta?: Meta) => this.emit("error", m, meta);
}

const log = new Logger("info");
log.debug("not shown - below threshold");
// -> {"level":"info","msg":"server started","port":8080}
log.info("server started", { port: 8080 });
// -> {"level":"error","msg":"db connection failed","retries":3}
log.error("db connection failed", { retries: 3 });
