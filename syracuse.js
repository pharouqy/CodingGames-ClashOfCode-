/*La suite de Syracuse (ou de Collatz) est définie de la manière suivante : on part d'un nombre entier plus grand que zéro et on applique successivement tant que le nombre est différent de 1 l'une des opérations suivante :
- on le divise par 2 s’il est pair,
- on le multiplie par 3 et on ajoute 1 s’il est impair,

Votre programme doit afficher la suite de Syracuse du nombre N donné en entrée et s'arrêter une fois la valeur 1 atteinte.

ENTRÉE :
Ligne 1 : Un entier N par lequel débuter la suite.

SORTIE :
Ligne 1 : Les valeurs séparées par un espace constituant la suite de Syracuse.

CONTRAINTES :
1 ≤ N < 100

EXEMPLE :
Entrée
5
Sortie
5 16 8 4 2 1*/

function syracuse(collatz) {
  const result = [];
  while (collatz !== 1) {
    if (collatz % 2 === 0) {
      collatz /= 2;
    } else {
      collatz = collatz * 3 + 1;
    }
    result.push(collatz);
  }

  return result.join(" ");
}

console.log(syracuse(5)); // 16 8 4 2 1
console.log(syracuse(2)); // 1
console.log(syracuse(15)); // 46 23 70 35 106 53 160 80 40 20 10 5 16 8 4 2 1
console.log(syracuse(7)); // 22 11 34 17 52 26 13 40 20 10 5 16 8 4 2 1
console.log(syracuse(3)); // 10 5 16 8 4 2 1
