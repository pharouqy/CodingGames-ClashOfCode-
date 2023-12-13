/*Calculate the maximum absolute difference between two adjacent integers in the input string.
Entrée
Line 1: An integer N, the number of integers in the input string.
Line 2: N space-separated integers.
Sortie
Output the maximum absolute difference between two adjacent integers in the input string.
Contraintes
2 <= N <= 10
0 <= integers in the input string <= 100000
Exemple
Entrée
3
1 2 10
Sortie
8
Sortie console*/

function maxDiffrence(array) {
  let maxDiff = 0;
  for (let i = 0; i < array.length; i++) {
    let diff = Math.abs(array[i] - array[i + 1]);
    if (diff > maxDiff) {
      maxDiff = diff;
    }
  }
  return maxDiff;
}

console.log(maxDiffrence([1, 2, 10])); // 8
console.log(maxDiffrence([1, 20, 10, 15, 20])); // 19
console.log(maxDiffrence([1, 2, 15, 15, 20, 25])); // 13
