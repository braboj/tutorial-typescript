// Safe Defaults & Least Privilege
// -------------------------------
// Two foundational security principles:
//   - Secure by default: when in doubt, DENY. Access must be explicitly
//   granted.
//   - Least privilege: give each actor the minimum permissions it needs, no
//   more.

type Role = "guest" | "editor" | "admin";
type Action = "read" | "write" | "delete";

// An explicit allow-list. Anything not listed is denied by default.
const permissions: Record<Role, ReadonlySet<Action>> = {
  guest: new Set(["read"]),
  editor: new Set(["read", "write"]),
  admin: new Set(["read", "write", "delete"]),
};

// Default-deny authorization check: only returns true on an explicit grant.
function can(role: Role, action: Action): boolean {
  return permissions[role].has(action);
}

// -> true
console.log(can("guest", "read"));
// -> false  (denied by default)
console.log(can("guest", "delete"));
// -> true
console.log(can("editor", "write"));
// -> false  (least privilege)
console.log(can("editor", "delete"));
// -> true
console.log(can("admin", "delete"));

// Apply least privilege at the boundary: enforce the check before the action,
// and fail closed (deny + error) rather than open.
function deleteResource(role: Role, id: number): string {
  if (!can(role, "delete")) {
    throw new Error("forbidden"); // fail closed
  }
  return `deleted #${id}`;
}

// -> deleted #7
console.log(deleteResource("admin", 7));
try {
  deleteResource("editor", 7);
} catch (e) {
  // -> forbidden
  console.log((e as Error).message);
}
