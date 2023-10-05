/*What is the difference between maximum value and minimum value of the four values?
Entrée
Line 1: integer a
Line 2: integer b
Line 3: integer c
Line 4: integer d
Sortie
Indicate the difference between the maximum and minimum values.
Contraintes
-10000 <= a <= 10000
-10000 <= b <= 10000
-10000 <= c <= 10000
-10000 <= d <= 10000
Exemple
Entrée
1
10
100
1
Sortie
99*/

function diffrenceBetweenMaxMin(...args) {
  const result = Math.max(...args) - Math.min(...args);
  return result;
}

console.log(diffrenceBetweenMaxMin(1, 10, 100, 1)); // 99
