/*Given a list of positive and negative numbers, output the sorted squared values containing only unique values.
Entrée
Line 1: the number N of integers in the list.
Line 2: N space-separated integers from -100 to 100.
Sortie
Line 1 : Unique squares, separated by space
Contraintes
1 ≤ N ≤ 20
Exemple
Entrée
5
-2 -1 0 1 2
Sortie
0 1 4*/

function trierFilter(array) {
  const result = array
    .map((e) => e ** 2)
    .sort((a, b) => a - b)
    .filter((e, i, a) => {
      return a.indexOf(e) === i;
    })
    .join(" ");
  return result;
}

console.log(trierFilter([1, 2, 5, 4, 7, -5, -9, -7, 0])); // 0 1 4 16 25 49 81
