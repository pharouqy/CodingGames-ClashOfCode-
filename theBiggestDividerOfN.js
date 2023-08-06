/*Trouvez le plus grand nombre puissance de 2 qui divise N
Entrée
Ligne 1 : un entier N
Sortie
Ligne 1 : le plus grand nombre qui est une puissance de 2 et qui est un diviseur de N
Contraintes
0 < N < 10^6
Exemple
Entrée
858616
Sortie
8*/

function theBiggestDividerOfN(number) {
  let count = 0;
  while (number % 2 === 0) {
    number = number / 2;
    count++;
  }
  return Math.pow(2, count);
}

console.log(theBiggestDividerOfN(858616)); // 8
console.log(theBiggestDividerOfN(6797854687524)); //4
console.log(theBiggestDividerOfN(5424675787524)); // 4
console.log(theBiggestDividerOfN(6478582349702451204)); // 4096
console.log(theBiggestDividerOfN(649730424516)); // 4
