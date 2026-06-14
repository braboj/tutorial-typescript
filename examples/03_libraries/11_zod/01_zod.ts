// Zod - Schema Validation (npm: zod)
// ----------------------------------
// TypeScript's types vanish at runtime, so data from outside (HTTP bodies, env,
// JSON files) must be validated at runtime. Zod is the de-facto standard: you
// declare a schema once and get BOTH runtime validation AND a static type from
// it.

import { z } from "zod";

// Define a schema. This doubles as documentation of the expected shape.
const UserSchema = z.object({
  id: z.number().int().positive(),
  name: z.string().min(1),
  email: z.email(), // built-in format validator
  role: z.enum(["admin", "user"]).default("user"),
  tags: z.array(z.string()).optional(),
});

// Derive the TypeScript type from the schema - one source of truth, no drift.
type User = z.infer<typeof UserSchema>;

// parse(): returns the typed value or THROWS a detailed error.
const user: User = UserSchema.parse({
  id: 1,
  name: "Ada",
  email: "ada@example.com",
  // role omitted -> the default "user" is applied
});
// -> user
console.log(user.role);

// safeParse(): never throws - returns a discriminated result you can branch on.
const result = UserSchema.safeParse({
  id: -5,
  name: "",
  email: "not-an-email",
});
// -> false
console.log(result.success);
if (!result.success) {
  // Zod reports every problem, with the path to each bad field -> 3
  console.log(result.error.issues.length);
  // -> [ 'email', 'id', 'name' ]
  console.log(result.error.issues.map((i) => i.path.join(".")).sort());
}

// Transformations and refinements run as part of parsing:
const TrimmedNonEmpty = z.string().trim().min(1);
// -> hi
console.log(TrimmedNonEmpty.parse("  hi  "));

const PasswordPair = z
  .object({ pw: z.string(), confirm: z.string() })
  .refine((v) => v.pw === v.confirm, { message: "passwords must match" });
// -> false
console.log(PasswordPair.safeParse({ pw: "a", confirm: "b" }).success);
