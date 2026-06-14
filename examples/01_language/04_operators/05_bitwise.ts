// Bitwise Operators
// -----------------
// Operate on the 32-bit binary representation of integers. Common for flags,
// permissions, and low-level work.

// -> 1   AND   (0101 & 0011 = 0001)
console.log(5 & 3);
// -> 7   OR    (0101 | 0011 = 0111)
console.log(5 | 3);
// -> 6   XOR   (0101 ^ 0011 = 0110)
console.log(5 ^ 3);
// -> -6  NOT   (inverts all bits)
console.log(~5);
// -> 16  left shift  (1 * 2^4)
console.log(1 << 4);
// -> 16  right shift (64 / 2^2)
console.log(64 >> 2);

// A practical use: bit flags for permissions.
const Read = 1 << 0; // 1
const Write = 1 << 1; // 2
const Exec = 1 << 2; // 4

let perms = Read | Write; // combine flags
// -> 3
console.log(perms);

const canWrite = (perms & Write) !== 0; // test a flag
// -> true
console.log(canWrite);

perms &= ~Write; // remove a flag
// -> false
console.log((perms & Write) !== 0);
