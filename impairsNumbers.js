/*Votre programme doit afficher tous les nombres impairs de 1 à N où N est donné en entrée.
Si N est impair, il doit aussi apparaître dans votre réponse.

ENTRÉE :
Ligne 1 : 1 entier N.

SORTIE :
Les nombres impairs de 1 à N

CONTRAINTES :
0 < N < 1000

EXEMPLE :
Entrée
9
Sortie
1
3
5
7
9*/

function impairsNumbers(number) {
  for (let i = 1; i <= number; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}

impairsNumbers(9); // 1 3 5 7 9