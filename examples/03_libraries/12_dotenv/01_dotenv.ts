// dotenv - Environment Configuration (npm: dotenv)
// ------------------------------------------------
// Twelve-factor apps read configuration from environment variables. `dotenv`
// loads key=value pairs from a `.env` file into process.env during local dev.
// In production you set real env vars instead; the .env file is git-ignored.

import dotenv from "dotenv";
import { join } from "node:path";

// Load the env file sitting next to this file. (Normally the file is named
// ".env" and you just call dotenv.config(), which reads .env from the project
// root. We point at "config.env" only so the file can live in this repo.)
dotenv.config({ path: join(import.meta.dirname, "config.env"), quiet: true });

// IMPORTANT: every env var is a string | undefined. Validate and coerce it into
// a typed config object - never sprinkle process.env reads across your app.
interface Config {
  appName: string;
  port: number;
  newUi: boolean;
}

function loadConfig(): Config {
  const port = Number(process.env.PORT ?? "3000");
  if (Number.isNaN(port)) throw new Error("PORT must be a number");
  return {
    appName: process.env.APP_NAME ?? "app", // string with a default
    port, // coerced to number
    newUi: process.env.FEATURE_NEW_UI === "true", // coerced to boolean
  };
}

const config = loadConfig();
// -> ts-sprint
console.log(config.appName);
// -> 8080 number
console.log(config.port, typeof config.port);
// -> true
console.log(config.newUi);

// Tip: pair dotenv with zod (see ../11_zod) to validate the whole environment
// at
// startup and fail fast with a clear message if something is missing or
// invalid.
