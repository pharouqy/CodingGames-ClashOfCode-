/*You want to make a 3 digit password, but you have to following rules:
The first digit must be between 0 and a.
The second digit must be between 0 and b.
The third digit must be between 0 and c.
In how many different ways can you create your password?
Entrée
3 space-separated integers a, b, c.
Sortie
The number of different ways you can create your password.
Contraintes
0 <= a, b, c <= 9
Exemple
Entrée
6 6 4
Sortie
245*/

function passwordPossibilities(a, b, c) {
  const array = [];
  for (let i = 0; i <= a; i++) {
    for (let j = 0; j <= b; j++) {
      for (let z = 0; z <= c; z++) {
        array.push([a, b, c]);
      }
    }
  }
  return array.length;
}

console.log(passwordPossibilities(6, 6, 4)); // 245
console.log(passwordPossibilities(7, 8, 2)); // 216
console.log(passwordPossibilities(5, 3, 1)); // 48
console.log(passwordPossibilities(7, 9, 9)); // 800
console.log(passwordPossibilities(5, 2, 4)); // 90
