// Secure Configuration: Never Hardcode Secrets
// --------------------------------------------
// A universal rule for every language: configuration and secrets (API keys, DB
// passwords, tokens) come from the ENVIRONMENT, never from source code. Hardcoded
// secrets get committed to git, copied into logs, and shared in screenshots - and
// rotating one means a code change and redeploy. Load config at startup, validate
// it, and fail closed if a required value is missing. (For the loading mechanics,
// see the dotenv chapter: ../../03_libraries/12_dotenv/01_dotenv.ts.)

// BAD: a secret baked into the source. It now lives forever in version history,
// even if you "delete" the line later.
//   const apiKey = "sk_live_5f3a9c...";   // never do this

// GOOD: read from the environment. A REQUIRED secret must be present or the app
// refuses to start - a loud crash at boot beats silent insecure behaviour later.
function requireEnv(name: string): string {
  const value = process.env[name]; // string | undefined (noUncheckedIndexedAccess)
  if (value === undefined || value === "") {
    throw new Error(`missing required config: ${name}`);
  }
  return value;
}

// Non-secret settings may have safe defaults; secrets must not.
function optionalEnv(name: string, fallback: string): string {
  return process.env[name] ?? fallback;
}

// Validate ALL config once, at startup, into a typed object. The rest of the app
// depends on this shape and never reaches into process.env directly.
interface AppConfig {
  readonly apiKey: string;
  readonly port: number;
  readonly logLevel: string;
}

function loadConfig(): AppConfig {
  return {
    apiKey: requireEnv("API_KEY"), // secret: required, no default
    port: Number(optionalEnv("PORT", "3000")), // non-secret: safe default
    logLevel: optionalEnv("LOG_LEVEL", "info"),
  };
}

// Simulate the environment a deployment would provide (in real life: the shell, a
// secrets manager, or a git-ignored .env file).
process.env.API_KEY = "sk_test_demo";

const config = loadConfig();
// Log NON-secret config only - never the secret value itself.
console.log(`port=${config.port} logLevel=${config.logLevel}`); // -> port=3000 logLevel=info
console.log(`apiKey loaded: ${config.apiKey.length > 0}`); // -> apiKey loaded: true

// A missing required secret fails CLOSED at startup, not mysteriously later:
try {
  process.env.API_KEY = ""; // simulate the secret not being set
  loadConfig();
} catch (e) {
  console.log((e as Error).message); // -> missing required config: API_KEY
}

// Takeaways: secrets in the environment (not source), validate once at boot, fail
// closed on anything missing, give defaults only to non-secrets, and never log
// secret values.
