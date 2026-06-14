// LAB - dotenv (Environment Configuration)
// =========================================
// Implement each task below so that running this file produces exactly the
// output shown in the `// Expected:` comments. Work top to bottom.
//
//   Run:   npx tsx examples/03_libraries/12_dotenv/lab.ts
//
// Covered by this chapter: loading a .env-style file with dotenv.config, the
// path option, reading process.env (string | undefined), defaults via `??`,
// coercing strings to number and boolean, and validating into a typed config.
// See the numbered example files in this folder if you get stuck.
//
// This folder ships a "lab.env" file next to this file:
//   SERVICE_NAME=billing-api
//   TIMEOUT_MS=2500
//   RETRIES=3
//   DEBUG_MODE=false

// ---------------------------------------------------------------------------
// Task 1 - Load the env file
// Import the default export from "dotenv" and import `join` from "node:path".
// Call dotenv.config({ path: ... , quiet: true }) pointing at "lab.env" in this
// folder (use import.meta.dirname). Then print a confirmation line.
// Expected: env loaded

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 2 - Read a raw value
// Read process.env.SERVICE_NAME and print it. Note its static type is
// string | undefined - you will deal with that in later tasks.
// Expected: billing-api

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 3 - A default for a missing var
// process.env.REGION is NOT set in lab.env. Read it and fall back to "eu-west"
// using the nullish coalescing operator (??). Print the result.
// Tip: ?? uses the fallback only when the left side is null or undefined.
// Expected: eu-west

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 4 - Coerce to a number
// Env values are always strings. Read process.env.TIMEOUT_MS, convert it with
// Number(...), and print the value followed by its typeof.
// Expected: 2500 number

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 5 - Coerce to a boolean
// Read process.env.DEBUG_MODE and turn it into a real boolean by comparing the
// string to "true" (i.e. value === "true"). Print the boolean.
// Expected: false

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 6 - Build a typed config object
// Define an interface Settings { serviceName: string; timeoutMs: number;
// retries: number; debug: boolean }. Write a function loadSettings(): Settings
// that reads the four vars, applies Number(...) for the numerics and the
// === "true" trick for the boolean, and uses "unknown-service" as the default
// for SERVICE_NAME. Build the object, then print serviceName, then retries with
// its typeof.
// Expected: billing-api
// Expected: 3 number

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 7 - Fail fast on a bad number
// Read process.env.TIMEOUT_MS through Number(...). If the result is NaN, throw
// an Error("TIMEOUT_MS must be a number"); otherwise print "config ok". Since
// TIMEOUT_MS is 2500 here, the valid branch runs.
// Tip: use Number.isNaN(...) to test the coerced value.
// Expected: config ok

// TODO: your code here
