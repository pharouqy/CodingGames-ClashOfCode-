/*Print a checklist of the given numbers where every odd number is ticked.
Entrée
Line 1: The number count of integers to check.
Line 2: count integers n to check, separated by a space.
Sortie
count lines (one for each value of n):
"[ ] n" if n is even,
"[x] n" if n is odd.
Contraintes
0 < count < 100
-100 < n < 100
Exemple
Entrée
5
1 2 3 4 5
Sortie
[x] 1
[ ] 2
[x] 3
[ ] 4
[x] 5*/

function checkOdd(array) {
  const result = [];
  array.forEach((element) => {
    return element % 2 !== 0
      ? result.push(`[x] ${element}`)
      : result.push(`[ ] ${element}`);
  });
  return result;
}

console.log(checkOdd([1, 2, 3, 4, 5])); // [ '[x] 1', '[ ] 2', '[x] 3', '[ ] 4', '[x] 5' ]
console.log(checkOdd([10, 25, 37, 46, 59])); // [ '[ ] 10', '[x] 25', '[x] 37', '[ ] 46', '[x] 59' ]
