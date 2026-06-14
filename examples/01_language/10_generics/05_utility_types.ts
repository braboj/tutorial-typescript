// Built-in Utility Types
// ----------------------
// TypeScript ships generic "utility types" that transform other types. They
// save
// you from rewriting near-identical interfaces.

interface User {
  id: number;
  name: string;
  email: string;
}

// Partial<T>: all properties optional (great for update functions). -> Ada L.
function updateUser(user: User, changes: Partial<User>): User {
  return { ...user, ...changes };
}
const u: User = { id: 1, name: "Ada", email: "a@x.io" };
console.log(updateUser(u, { name: "Ada L." }).name);

// Pick<T, K>: keep only some properties. -> { id: 1, name: 'Ada' }
type UserPreview = Pick<User, "id" | "name">;
const preview: UserPreview = { id: 1, name: "Ada" };
console.log(preview);

// Omit<T, K>: drop some properties. -> Linus
type NewUser = Omit<User, "id">; // create before an id exists
const draft: NewUser = { name: "Linus", email: "l@x.io" };
console.log(draft.name);

// Readonly<T>: all properties immutable.
const frozen: Readonly<User> = u;
// frozen.name = "x"; // Error: cannot assign to readonly property.
// -> 1
console.log(frozen.id);

// Record<K, V>: an object type with known keys and uniform values. -> red
const roleColors: Record<"admin" | "guest", string> = {
  admin: "red",
  guest: "gray",
};
console.log(roleColors.admin);

// Required<T> and others exist too (ReturnType, Parameters, Awaited, ...). -> 5
type Maybe = { x?: number };
const definite: Required<Maybe> = { x: 5 };
console.log(definite.x);
