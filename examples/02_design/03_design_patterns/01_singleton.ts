// Singleton (Creational)
// ----------------------
// Ensures a class has exactly ONE instance and gives a global access point to
// it.
// Useful for shared resources like a config registry or connection pool.
// Caution: singletons are global mutable state - overuse hurts testability.

class AppConfig {
  // The single shared instance, created lazily.
  private static instance: AppConfig | undefined;

  private settings = new Map<string, string>();

  // Private constructor prevents `new AppConfig()` from outside.
  private constructor() {}

  static getInstance(): AppConfig {
    if (!AppConfig.instance) {
      AppConfig.instance = new AppConfig();
    }
    return AppConfig.instance;
  }

  set(key: string, value: string): void {
    this.settings.set(key, value);
  }
  get(key: string): string | undefined {
    return this.settings.get(key);
  }
}

const a = AppConfig.getInstance();
a.set("theme", "dark");

const b = AppConfig.getInstance(); // same object, not a new one
// -> true
console.log(a === b);
// -> dark
console.log(b.get("theme"));

// In TypeScript a MODULE is already a singleton (evaluated once, exports
// shared),
// so often the simplest singleton is just module-level state:
//
//   // config.ts
//   export const config = new Map<string, string>();
//
// Reach for the class form only when you need lazy init or to hide
// construction.
