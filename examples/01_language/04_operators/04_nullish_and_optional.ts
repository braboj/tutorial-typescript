// Nullish Coalescing (??) and Optional Chaining (?.)
// --------------------------------------------------
// Two of the most useful modern operators for handling missing data.

// ?? provides a default ONLY when the left side is null or undefined.
// Unlike ||, it does NOT treat 0, "", or false as missing.
const volume = 0;
// -> 50   (0 is falsy - probably a bug!)
console.log(volume || 50);
// -> 0    (0 is a real value - correct)
console.log(volume ?? 50);

// ?. safely reads through a chain that might be null/undefined, returning
// undefined instead of throwing.
interface User {
  name: string;
  address?: { city?: string };
}

const u1: User = { name: "Ada", address: { city: "London" } };
const u2: User = { name: "Linus" };

// -> London
console.log(u1.address?.city);
// -> undefined   (no crash)
console.log(u2.address?.city);

// Combine them for a safe read with a default:
// -> unknown
console.log(u2.address?.city ?? "unknown");

// Optional call and optional index:
const callbacks: { onDone?: () => string } = {};
// -> undefined  (not called, no crash)
console.log(callbacks.onDone?.());
