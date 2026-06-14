// Type-Safe Builder
// -----------------
// The classic Builder (see ../03_design_patterns/03_builder.ts) checks required
// fields at RUNTIME inside build(). This version tracks which fields are set in the
// TYPE, so calling build() too early is a COMPILE error. The trick: thread a union
// of "keys provided so far" through each step's return type.

interface Config {
  host: string;
  port: number;
  tls: boolean;
}

// `Provided` is the union of keys supplied so far - it starts empty (`never`).
class ConfigBuilder<Provided extends keyof Config = never> {
  private values: Partial<Config> = {};

  // Phantom, CONTRAVARIANT marker: putting `Provided` in an input position means a
  // builder that has provided FEWER keys is NOT assignable to one that needs more.
  // (See variance in ../../01_language/17_advanced_types/05_variance.ts.) That
  // asymmetry is exactly what gates build(). It holds no runtime value.
  private readonly _provided?: (provided: Provided) => void;

  // Each setter ADDS its key `K` to the Provided union in the return type.
  with<K extends keyof Config>(
    key: K,
    value: Config[K],
  ): ConfigBuilder<Provided | K> {
    this.values[key] = value;
    return this as ConfigBuilder<Provided | K>;
  }

  // build() type-checks ONLY when Provided covers every required key - i.e. when
  // `this` is assignable to ConfigBuilder<keyof Config>.
  build(this: ConfigBuilder<keyof Config>): Config {
    return this.values as Config;
  }
}

const cfg = new ConfigBuilder()
  .with("host", "localhost")
  .with("port", 8080)
  .with("tls", false)
  .build();
console.log(`${cfg.host}:${cfg.port} tls=${cfg.tls}`); // -> localhost:8080 tls=false

// Missing a required field makes build() UN-CALLABLE at compile time:
//   new ConfigBuilder().with("host", "x").build();
//   // Error: 'this' of type ConfigBuilder<"host"> is not assignable to
//   //        ConfigBuilder<keyof Config>  ("port" | "tls" still missing)
