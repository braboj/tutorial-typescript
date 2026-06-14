// Primitive Types
// ---------------
// TypeScript's primitives mirror JavaScript's. You can annotate a variable with
// `: type`, but TypeScript usually infers it for you (see
// 06_type_inference.ts).

const count: number = 42; // all numbers are floating point: 1, 1.5, -3
const price: number = 19.99;
const big: bigint = 9007199254740993n;
// integers beyond Number.MAX_SAFE_INTEGER
const name: string = "Ada";
const isReady: boolean = true;
const nothing: null = null;
const notSet: undefined = undefined;
const id: symbol = Symbol("id"); // a unique, never-equal value

// -> number string boolean bigint symbol
console.log(typeof count, typeof name, typeof isReady, typeof big, typeof id);

// Number literals can be written in several bases:
const decimal = 255;
const hex = 0xff;
const octal = 0o377;
const binary = 0b1111_1111; // underscores are ignored, just for readability
// -> 255 255 255 255
console.log(decimal, hex, octal, binary);
