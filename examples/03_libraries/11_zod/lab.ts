// LAB - Zod (Schema Validation)
// =============================
// Implement each task below so that running this file produces exactly the
// output shown in the `// Expected:` comments. Work top to bottom.
//
//   Run:   npx tsx examples/03_libraries/11_zod/lab.ts
//
// Covered by this chapter: defining object schemas, deriving types with
// z.infer, parse() vs safeParse(), defaults & optionals, built-in format
// validators, transforms (trim/min), and refinements.
// See the numbered example files in this folder if you get stuck.
//
// You will need to import zod yourself in each task:  import { z } from "zod";

// ---------------------------------------------------------------------------
// Task 1 - Define a schema and parse a valid value
// Build a schema for a product: `sku` (a non-empty string) and `price`
// (a positive number). Parse the object { sku: "BOOK-1", price: 12 } and
// print the parsed price.
// Expected: 12
// Tip: z.object({...}), z.string().min(1), z.number().positive(), .parse(...)

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 2 - Apply a default value
// Define a schema with a `currency` field of z.string() that defaults to
// "EUR". Parse the object {} (currency omitted) and print the resulting
// currency.
// Expected: EUR

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 3 - Derive a static type with z.infer
// Reuse a small schema { title: z.string(), pages: z.number().int() } and
// derive a type from it with z.infer. Declare a value of that type and print
// its title.
// Expected: Dune
// Tip: type Book = z.infer<typeof BookSchema>;

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 4 - safeParse a bad value and check success
// Define a schema { age: z.number().int().positive() }. Use safeParse on
// { age: -3 } and print the .success flag.
// Expected: false

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 5 - Count and list the failing field paths
// Define a schema { username: z.string().min(1), email: z.email() }. safeParse
// the object { username: "", email: "nope" }. When it fails, print how many
// issues were reported, then print the sorted list of issue field paths.
// Expected: 2
// Expected: [ 'email', 'username' ]
// Tip: result.error.issues -> map (i) => i.path.join(".") -> .sort()

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 6 - A transforming schema
// Build a schema that trims a string and requires at least one character.
// Parse the value "   hello   " and print the cleaned result.
// Expected: hello
// Tip: z.string().trim().min(1)

// TODO: your code here

// ---------------------------------------------------------------------------
// Task 7 - A cross-field refinement
// Build an object schema { start: z.number(), end: z.number() } refined so
// that `end` must be greater than `start`. safeParse { start: 10, end: 4 }
// and print the .success flag.
// Expected: false
// Tip: .refine((v) => v.end > v.start, { message: "end must be after start" })

// TODO: your code here
