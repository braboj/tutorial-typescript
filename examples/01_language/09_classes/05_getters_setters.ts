// Getters and Setters
// -------------------
// Accessors look like properties from the outside but run code. Use them to
// compute values, validate writes, or expose private state read-only.

class Temperature {
  // store one source of truth, expose two views of it
  private celsius = 0;

  get c(): number {
    return this.celsius;
  }
  set c(value: number) {
    if (value < -273.15) throw new Error("below absolute zero");
    this.celsius = value;
  }

  // A computed, derived property with only a getter (read-only from outside):
  get f(): number {
    return this.celsius * 1.8 + 32;
  }
  set f(value: number) {
    this.c = (value - 32) / 1.8; // reuse the validating setter
  }
}

const t = new Temperature();
t.c = 25; // looks like a field, runs the setter
// -> 25
console.log(t.c);
// -> 77
console.log(t.f);

t.f = 212;
// -> 100
console.log(t.c);
