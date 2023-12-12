/*You have a list A of N integers. You will apply the following operations in their respective order for exactly N times:

1- Compute avg, the average value of all integers in the current list.
2- remove all elements that are strictly smaller than avg from the list.

Output the remaining elements in the same order as given in input.

Note: the average value of a list of integers is computed by summing all integers in the list then dividing the sum by the number of integers in it.
Entrée
Line 1: An integer N for the number of elements in the list
Line 2: A list of N space separated integers.
Sortie
Line 1: Multiple space separated integers, the remaining elements in the set in the same order as given in input.
Contraintes
2 ≤ N ≤ 1000
0 ≤ A_i ≤ 1000
Exemple
Entrée
5
1 2 3 4 5
Sortie
5
Sortie console*/

function operations(array) {
  let list = array.map(Number);
  for (let i = 0; i < array.length; i++) {
    const avg = list.reduce((sum, num) => sum + num, 0) / list.length;
    list = list.filter((num) => num >= avg);
  }
  return list.join(" ");
}

console.log(operations([1, 2, 3, 4, 5])); // 5
console.log(operations([30, 2, 30, 4, 5, 6])); // 30 30
console.log(operations([10, 5, 3, 10, 5, 5, 10, 8, 9, 10])); // 10 10 10 10
