// Default Imports
// ---------------
// A default export is imported WITHOUT braces, and you may name it anything.

import Logger, { createConsoleLogger } from "./logger.js";
import type { Level } from "./logger.js";

const log = new Logger("api");
// -> [api] INFO: server started
log.log("info", "server started");

const level: Level = "warn";
// -> [api] WARN: high memory usage
log.log(level, "high memory usage");

// The named export comes along in the same statement:
const appLog = createConsoleLogger();
// -> [app] ERROR: something broke
appLog.log("error", "something broke");

// Guidance: many style guides prefer NAMED exports everywhere (better
// auto-import, refactoring, and no naming ambiguity). Default exports are fine
// for a module's single primary export.
