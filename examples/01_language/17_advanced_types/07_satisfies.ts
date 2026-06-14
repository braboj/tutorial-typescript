// The `satisfies` Operator
// ------------------------
// `satisfies` checks that a value matches a type WITHOUT widening the value to
// that type. You get validation AND keep the precise inferred type - the best of
// a type annotation and `as const`. Since TS 4.9 it is everywhere in config code.

// Problem: a plain annotation validates but WIDENS, throwing away literal detail.
type Config = Record<string, string | number>;
const annotated: Config = { host: "localhost", port: 8080 };
// annotated.port is now `string | number` - the fact it's a number is lost, so
// `annotated.port.toFixed(0)` would NOT compile.
console.log(annotated.port); // -> 8080

// `satisfies` validates against the SAME type but PRESERVES each property's narrow
// inferred type.
const config = {
  host: "localhost",
  port: 8080,
} satisfies Config;
console.log(config.port.toFixed(0)); // -> 8080  (port is `number`, so .toFixed works)

// It also keeps literal KEYS exact while checking the values, so you can derive a
// precise key union from the value.
const routes = {
  home: "/",
  about: "/about",
} satisfies Record<string, `/${string}`>;
type RouteName = keyof typeof routes; // "home" | "about", not `string`
const r: RouteName = "about";
console.log(routes[r]); // -> /about

// A classic combo: the contextual type from `satisfies` even infers array
// literals as the expected tuple shape, while each entry is still validated.
const palette = {
  primary: [0, 122, 255],
  danger: [255, 59, 48],
} satisfies Record<string, readonly [number, number, number]>;
console.log(palette.primary[0]); // -> 0
