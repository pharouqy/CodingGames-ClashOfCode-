/*Build the Fibonacci Sequence but with given inputs instead of set inputs, 0 and 1. Construct an additive sequence with t, a number of times to loop, a, a first starting digit, and b, a second starting digit.
Entrée
An integer t for the number of times to loop
An integer a as the first starting digit
An integer b as the second starting digit
Sortie
Line 1: a as it is at the start of the current loop
Line 2: a as it is at the start of the current loop
...
Line t: a as it is at the start of the current loop
Contraintes
0<t≤75
0≤a≤25
0≤b≤500
Exemple
Entrée
10
0
1
Sortie
0
1
1
2
3
5
8
13
21
34*/

function generateFibonacciSequence(t, a, b) {
  let sequence = [];
  let prevNumber = a;
  let currentNumber = b;

  for (let i = 0; i < t; i++) {
    sequence.push(prevNumber);
    let nextNumber = prevNumber + currentNumber;
    prevNumber = currentNumber;
    currentNumber = nextNumber;
  }

  return sequence;
}

console.log(generateFibonacciSequence(10, 0, 1)); // [0,1,1,2,3,5,8,13,21,34]
