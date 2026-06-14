// Logging (starter)
// ----------------------------------------------------------------------------
// Good logging is structured and leveled. This section will cover log levels,
// structured (JSON) logs, and popular libraries (pino, winston). Below is a
// tiny dependency-free leveled logger.

// ================================= EXAMPLE ==================================

type Level = "debug" | "info" | "warn" | "error";
type Meta = Record<string, unknown>;

const ORDER: Record<Level, number> = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3,
};

class Logger {
  private readonly min: Level;

  constructor(min: Level = "info") {
    this.min = min;
  }

  private emit(level: Level, msg: string, meta?: Meta): void {
    // Filter below threshold
    if (ORDER[level] < ORDER[this.min]) return;

    // Structured output is easy to parse by log aggregators:
    const entry = { level, msg, ...meta };
    console.log(JSON.stringify(entry));
  }

  public debug(msg: string, meta?: Meta): void {
    this.emit("debug", msg, meta);
  }

  public info(msg: string, meta?: Meta): void {
    this.emit("info", msg, meta);
  }

  public warn(msg: string, meta?: Meta): void {
    this.emit("warn", msg, meta);
  }

  public error(msg: string, meta?: Meta): void {
    this.emit("error", msg, meta);
  }
}

const log = new Logger("info");

// Expected -> (nothing - below threshold)
log.debug("not shown - below threshold");

// Expected -> {"level":"info","msg":"server started","port":8080}
log.info("server started", { port: 8080 });

// Expected -> {"level":"error","msg":"db connection failed","retries":3}
log.error("db connection failed", { retries: 3 });
