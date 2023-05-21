/*Vous devez convertir un nombre hexadécimal en nombre décimal.

ENTRÉE :
Un chaîne de caractères number contenant un nombre hexadécimal en majuscules.

SORTIE :
La valeur décimale du nombre donné.

CONTRAINTES :
number représente un entier positif ≤ 10000000.

EXEMPLE :
Entrée
F
Sortie
15*/

function converToNumberDec(number) {
  return parseInt(number, 16);
}

console.log(converToNumberDec("F")); // 15
