// Objects
// -------
// Object types describe which keys exist and what type each value has.

const user: { name: string; age: number; admin?: boolean } = {
  name: "Ada",
  age: 36,
  // admin is optional (note the ?), so we can omit it
};
// -> Ada 36 undefined
console.log(user.name, user.age, user.admin);

// Nested objects:
const order = {
  id: 1001,
  customer: { name: "Linus", vip: true },
  items: ["keyboard", "mouse"],
};
// -> Linus 2
console.log(order.customer.name, order.items.length);

// Index signatures describe objects used as dictionaries/maps:
const inventory: { [sku: string]: number } = {
  "A-1": 5,
  "B-2": 0,
};
inventory["C-3"] = 12;
// -> 5 12
console.log(inventory["A-1"], inventory["C-3"]);

// Spread copies properties into a new object (shallow copy):
const updated = { ...user, age: 37 };
// -> 37 36
console.log(updated.age, user.age);
