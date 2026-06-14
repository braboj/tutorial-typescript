// The TypeScript Philosophy
// -------------------------
// Python has "import this" (the Zen of Python). Here's a friendly TypeScript
// counterpart: the guiding ideas behind the language and this tutorial.

const principles = [
  "TypeScript is JavaScript that scales.",
  "Types are documentation that can't go out of date.",
  "Catch errors at compile time, not at 3 a.m. in production.",
  "Prefer inference; annotate at the boundaries.",
  "Make illegal states unrepresentable.",
  "`any` is an escape hatch, not a habit.",
  "Turn on strict mode and leave it on.",
];

// Prints each principle on its own line, numbered 1 through 7.
for (const [i, principle] of principles.entries()) {
  console.log(`${i + 1}. ${principle}`);
}

// These aren't enforced by the compiler - they're the mindset that makes
// TypeScript pay off. The rest of this tutorial puts them into practice.
