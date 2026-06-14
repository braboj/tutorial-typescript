// Type Aliases
// ------------
// `type` gives a name to any type - a primitive, object, union, function, etc.
// Naming types makes code self-documenting and reusable.

type UserId = number; // a domain-specific name for a primitive
type Coordinates = { lat: number; lng: number };
type Handler = (event: string) => void; // a function type

const id: UserId = 42;
const here: Coordinates = { lat: 52.52, lng: 13.4 };
const log: Handler = (e) => console.log("event:", e);

// -> 42
console.log(id);
// -> { lat: 52.52, lng: 13.4 }
console.log(here);
// -> event: click
log("click");

// Aliases can compose:
type Nullable<T> = T | null; // generic alias (more in the Generics chapter)
const maybeName: Nullable<string> = null;
// -> null
console.log(maybeName);
