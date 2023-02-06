/*In a town there are X men, each man has X wives and each wife has X kids, you should print the total T number of people in this town.
Entrée
One line: The integer X
Sortie
One line: The total T number of people in this town
Contraintes
0 ≤ X ≤ 300
Exemple
Entrée
7
Sortie
399*/

function totalPeople(X) {
  let total = X + Math.pow(X, 2) + Math.pow(X, 3);
  return total;
}

console.log(totalPeople(7)); //399
console.log(totalPeople(0)); // 0
console.log(totalPeople(3)); // 39
console.log(totalPeople(1000101)); // 1000304030807040600
