// Serialization (starter)
// -----------------------
// Serialization turns in-memory objects into a transferable format (usually
// JSON) and back. This section will cover JSON edge cases, custom
// (de)serializers,
// dates, and validation on parse. Below: the essentials.

interface Task {
  id: number;
  title: string;
  done: boolean;
  tags: string[];
}

const task: Task = { id: 1, title: "Learn TS", done: false, tags: ["study"] };

// Serialize: object -> string
// -> {"id":1,"title":"Learn TS","done":false,"tags":["study"]}
const json = JSON.stringify(task);
console.log(json);

// Pretty-print with indentation. Prints the object across multiple indented
// lines:
console.log(JSON.stringify({ a: 1 }, null, 2));

// Deserialize: string -> object. NOTE: the result is `any`, so validate it
// (see ../../02_design/04_secure_design) before trusting its shape.
const parsed = JSON.parse(json) as Task;
// -> Learn TS
console.log(parsed.title);

// Gotchas JSON can't represent natively:
//   - Dates become strings; revive them yourself.
//   - undefined and functions are dropped; Map/Set are not supported.
// -> {"when":"2024-01-01T00:00:00.000Z"}
const withDate = JSON.stringify({ when: new Date("2024-01-01T00:00:00Z") });
console.log(withDate);

// A reviver function customizes parsing (e.g. turn ISO strings back into
// Dates) -> true
const revived = JSON.parse(withDate, (key, value) =>
  key === "when" && typeof value === "string" ? new Date(value) : value,
);
console.log(revived.when instanceof Date);
