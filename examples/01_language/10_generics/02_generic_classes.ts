// Generic Classes
// ---------------
// Classes can be generic too, so one implementation serves every element type
// with full type safety.

class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }
  pop(): T | undefined {
    return this.items.pop();
  }
  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }
  get size(): number {
    return this.items.length;
  }
}

const numbers = new Stack<number>();
numbers.push(1);
numbers.push(2);
// -> 2
console.log(numbers.peek());
// -> 2
console.log(numbers.pop());
// -> 1
console.log(numbers.size);

const words = new Stack<string>();
words.push("hello");
// -> hello
console.log(words.pop());

// A generic "box" with a transform method that can change the element type:
class Box<T> {
  constructor(private value: T) {}
  get(): T {
    return this.value;
  }
  map<U>(fn: (value: T) => U): Box<U> {
    return new Box(fn(this.value));
  }
}
const lengthBox = new Box("typescript").map((s) => s.length);
// -> 10
console.log(lengthBox.get());
