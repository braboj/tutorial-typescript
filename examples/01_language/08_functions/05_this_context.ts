// `this` and Function Context
// ---------------------------
// `this` refers to the object a function is called ON. Regular functions get a
// dynamic `this`; arrow functions capture `this` from where they are DEFINED.
// This difference is a frequent source of bugs.

const counter = {
  count: 0,
  // Regular method: `this` is the counter when called as counter.incr().
  incr(this: { count: number }) {
    this.count++;
  },
};
counter.incr();
counter.incr();
// -> 2
console.log(counter.count);

// The classic bug: a regular function used as a callback loses `this`.
const timer = {
  seconds: 0,
  // Arrow function captures `this` = timer, so it keeps working as a callback:
  tickArrow: function () {
    const run = () => {
      this.seconds++; // `this` is timer, thanks to the arrow
    };
    run();
  },
};
timer.tickArrow();
// -> 1
console.log(timer.seconds);

// Rule of thumb: use arrow functions for callbacks so `this` stays predictable,
// and use regular methods when you WANT `this` to be the calling object.
