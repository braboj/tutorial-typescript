// Day.js - Dates & Times (npm: dayjs)
// -----------------------------------
// JavaScript's built-in Date is clunky (mutable, awkward formatting, 0-based
// months). Day.js is a tiny, immutable wrapper that most projects reach for.
// We use the UTC plugin so output is identical regardless of your machine's
// timezone.

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";
dayjs.extend(utc);

// Parse an ISO string (immutably - operations return NEW objects):
const d = dayjs.utc("2024-01-15T10:30:00Z");

// Formatting with tokens (no more manual getFullYear() string-building):
// -> 2024-01-15
console.log(d.format("YYYY-MM-DD"));
// -> 15/01/2024 10:30
console.log(d.format("DD/MM/YYYY HH:mm"));

// Arithmetic returns new instances; the original is unchanged:
const later = d.add(2, "week").subtract(3, "hour");
// -> 2024-01-29 07:30
console.log(later.format("YYYY-MM-DD HH:mm"));
// -> 2024-01-15 10:30  (unchanged)
console.log(d.format("YYYY-MM-DD HH:mm"));

// Differences (2024 is a leap year, so Jan + Feb = 31 + 29 = 60 days) -> 60
const start = dayjs.utc("2024-01-01");
const end = dayjs.utc("2024-03-01");
console.log(end.diff(start, "day"));

// Comparisons -> true
console.log(start.isBefore(end));
// -> 2024 1 15  (month is 0-based!)
console.log(d.year(), d.month() + 1, d.date());

// For contrast, the built-in Date can still be useful for simple needs:
// -> 2024-01-15T10:30:00.000Z
console.log(new Date("2024-01-15T10:30:00Z").toISOString());
