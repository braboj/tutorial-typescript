// Security Logging & Audit Trails
// -------------------------------
// Logging is a first-class security control, not an afterthought. An AUDIT TRAIL
// answers the questions every investigation needs: WHO did WHAT, WHEN, and was it
// ALLOWED or DENIED? Without it you cannot detect misuse or reconstruct a breach.
// This builds on structured/leveled logging (../../03_libraries/01_logging) and
// the redaction rules (./04_secrets_and_errors.ts), applied with a security lens.

// A security event is structured, queryable, and built ONLY from safe fields -
// note there is deliberately no password/token field anywhere in the type.
type Outcome = "success" | "failure" | "denied";

interface AuditEvent {
  readonly at: string; // when (ISO timestamp, injected for testability)
  readonly actor: string; // who (user id, or "anonymous")
  readonly action: string; // what (e.g. "auth.login", "order.delete")
  readonly outcome: Outcome; // allowed / failed / denied
  readonly meta?: Record<string, unknown>; // extra context - must be non-secret
}

// Redact anything sensitive that slips into meta, so secrets never reach the log.
const SENSITIVE = new Set(["password", "token", "apiKey", "secret", "ssn"]);
function redact(meta: Record<string, unknown>): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(meta)) {
    out[key] = SENSITIVE.has(key) ? "***" : value;
  }
  return out;
}

// An APPEND-ONLY audit log: callers can record and read, but never mutate or
// delete past entries. The backing array is a true-private `#` field, so tampering
// isn't even reachable from outside - that immutability is part of the point.
class AuditLog {
  readonly #entries: AuditEvent[] = [];
  // Inject the clock so the trail is deterministic and testable (Dependency
  // Inversion again - see ../02_solid_principles/05_dependency_inversion.ts).
  constructor(private readonly now: () => string) {}

  record(
    actor: string,
    action: string,
    outcome: Outcome,
    meta?: Record<string, unknown>,
  ): void {
    const event: AuditEvent = {
      at: this.now(),
      actor,
      action,
      outcome,
      // Conditional spread avoids writing `meta: undefined` (exactOptionalPropertyTypes).
      ...(meta ? { meta: redact(meta) } : {}),
    };
    this.#entries.push(event);
    console.log(JSON.stringify(event)); // in real life: ship to a SIEM / aggregator
  }

  // Read-only view for investigation; the underlying array stays private.
  entries(): readonly AuditEvent[] {
    return this.#entries;
  }
}

// Fixed clock so this example prints the same thing every run.
const audit = new AuditLog(() => "2026-06-14T10:00:00.000Z");

// Log the SECURITY-RELEVANT events: auth attempts, access-control decisions, and
// sensitive actions. Always record failures and denials - those are the signal.
audit.record("anonymous", "auth.login", "failure", { email: "ada@x.io" });
// -> {"at":"2026-06-14T10:00:00.000Z","actor":"anonymous","action":"auth.login","outcome":"failure","meta":{"email":"ada@x.io"}}
audit.record("user:42", "auth.login", "success");
// -> {"at":"2026-06-14T10:00:00.000Z","actor":"user:42","action":"auth.login","outcome":"success"}
audit.record("user:42", "order.delete", "denied", { orderId: 7 });
// -> {"at":"2026-06-14T10:00:00.000Z","actor":"user:42","action":"order.delete","outcome":"denied","meta":{"orderId":7}}

// A secret accidentally passed in meta is redacted, never logged in the clear:
audit.record("user:42", "token.refresh", "success", { token: "abc123" });
// -> {"at":"2026-06-14T10:00:00.000Z","actor":"user:42","action":"token.refresh","outcome":"success","meta":{"token":"***"}}

console.log(`audit entries: ${audit.entries().length}`); // -> audit entries: 4

// Rules of thumb: log authentication + authorization decisions and sensitive
// actions; capture WHO / WHAT / WHEN / OUTCOME; keep the trail append-only; redact
// secrets and PII; and never log enough to reconstruct a password, token, or
// full card/SSN.
