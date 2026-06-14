// Branded (Nominal) Types
// -----------------------
// TypeScript is STRUCTURAL: two types with the same shape are interchangeable. So
// a `UserId` that is just `string` accepts ANY string - an email, raw input,
// anything. Branding fakes NOMINAL typing to stop that whole class of bug.

// Without branding these are the same type and mix freely - a real source of bugs
// (passing an order id where a user id was meant).
type PlainUserId = string;
type PlainOrderId = string;
const oops: PlainUserId = "order-123"; // compiles, but it's an order id!
console.log(oops); // -> order-123

// Branding: intersect with a unique, phantom "brand" tag. The tag lives ONLY in
// the type system (a `unique symbol` key, never assigned at runtime), so values
// stay plain strings with zero runtime cost.
declare const brand: unique symbol;
type Brand<T, B> = T & { readonly [brand]: B };

type UserId = Brand<string, "UserId">;
type OrderId = Brand<string, "OrderId">;

// A "smart constructor" is the only sanctioned way to mint a branded value: it
// validates, then asserts the brand.
function toUserId(raw: string): UserId {
  if (raw.length === 0) throw new Error("empty id");
  return raw as UserId;
}

function loadUser(id: UserId): string {
  return `loading ${id}`;
}

const uid = toUserId("u-42");
console.log(loadUser(uid)); // -> loading u-42

// The compiler now REJECTS mixing, even though both are strings at runtime:
//   loadUser("u-42");            // Error: a plain string is not a UserId
//   loadUser("o-1" as OrderId);  // Error: OrderId is not a UserId
// The brand carries INTENT through the type system - and disappears at runtime.
console.log(typeof uid); // -> string  (still just a string)
