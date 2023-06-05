/*You are given m integers each on a separate line. If an integer n is divisible by 2 multiply it by 2 otherwise multiply it by 3. For example if input is 1, 2, 3, the output should be 3, 4, 9.
Entrée
Line 1: An integer m for the number of integers to multiply.

Next m lines: An integer n.
Sortie
m lines: Multiplied integer.
Contraintes
1 < m < 1000
Exemple
Entrée
3
1
2
3
Sortie
3
4
9*/

function multiplyByTwoOrThree(array) {
  let multiply = array.map((element) => {
    return element % 2 === 0 ? element * 2 : element * 3;
  });
  return multiply;
}

console.log(multiplyByTwoOrThree([1, 2, 3])); // [3, 4, 9]
console.log(multiplyByTwoOrThree([2, 9, 5, 7, 6])); // [ 4, 27, 15, 21, 12 ]
console.log(multiplyByTwoOrThree([1, 5, 13])); // [ 3, 15, 39 ]
console.log(multiplyByTwoOrThree([9, 5, 3, 6, 7])); // [ 27, 15, 9, 12, 21 ]
