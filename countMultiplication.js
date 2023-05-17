/*Given two numbers a and b, you have to count how many numbers within a range belong to the following categories:

1. Multiples of a, but not b
2. Multiples of b, but not a
3. Multiples of both a and b
4. None of the above

For example, given a = 2, b = 3
Within 1 to 20 (inclusive), we have

Cat1: 2, 4, 8, 10, 14, 16, 20
Cat2: 3, 9, 15
Cat3: 6, 12, 18
Cat4: 1, 5, 7, 11, 13, 17, 19

The number count in each of these categories are:
7 3 3 7
Entrée
Line 1: Integer a and b
Line 2: Start and End of the range, both inclusive
Sortie
Line 1 : the number counts in the four categories as described above, separated from each other by a space
Contraintes
a and b have different values.
1 ≤ a, b, S, E ≤ 10000
Exemple
Entrée
2 3
1 20
Sortie
7 3 3 7*/

function countMultiplication(a, b, [x, y]) {
  let multipleA = [];
  let multipleB = [];
  for (let i = x; i <= y; i++) {
    if (i % a === 0) {
      multipleA.push(i);
    }
  }
  for (let i = x; i <= y; i++) {
    if (i % b === 0) {
      multipleB.push(i);
    }
  }
  let countA = [];
  let countB = [];
  let countAB = [];
  let count = [];
  for (let i = 0; i <= multipleA.length; i++) {
    for (let j = 0; j <= multipleB.length; j++) {
      if (!multipleA.includes(multipleB[j])) {
        countB.push(multipleB[j]);
      } else if (!multipleB.includes(multipleA[i])) {
        countA.push(multipleA[i]);
      } else if (
        multipleA.includes(multipleB[j]) &&
        multipleB.includes(multipleA[i])
      ) {
        countAB.push([multipleA[i], multipleB[j]]);
      }
    }
  }
  const arrayA = countA.filter(
    (x, i, array) => array.indexOf(x) === i && x !== undefined
  );
  const arrayB = countB.filter(
    (x, i, array) => array.indexOf(x) === i && x !== undefined
  );
  const arrayAB = countAB
    .flatMap((x) => {
      return x;
    })
    .filter((x, i, array) => array.indexOf(x) === i);
  const array = arrayA
    .concat(arrayB)
    .concat(arrayAB)
    .sort((a, b) => a - b);
  const arr = [];
  for (let i = x; i <= y; i++) {
    if (!array.includes(i)) {
      arr.push(i);
    }
  }
  return [arrayA.length, arrayB.length, arrayAB.length, arr.length];
}

console.log(countMultiplication(2, 3, [1, 20])); // [ 7, 3, 3, 7 ]
console.log(countMultiplication(5, 7, [1, 30])); // [ 0, 4, 0, 26 ]
console.log(countMultiplication(9, 13, [7, 50])); // [ 0, 3, 0, 41 ]
console.log(countMultiplication(3, 5, [1, 25])); // [ 7, 4, 1, 13 ]
