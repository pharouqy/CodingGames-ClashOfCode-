/*Votre programme doit afficher la représentation binaire des nombres donnés en entrée.
Chaque nombre est donné sur une nouvelle ligne.
Votre programme doit afficher le résultat binaire suivi d'un retour à la ligne dans le même ordre que la lecture des nombres.
La représentation binaire commencera toujours par un 1, sauf pour le nombre 0 (pas de zéro-padding).

ENTRÉE :
Ligne 1 : Un entier N pour la quantité de nombres à tester.
N prochaines lignes : Un entier X.

SORTIE :
N lignes : La représentation binaire de X.

CONTRAINTES :
0 < N ≤ 100
0 ≤ X ≤ 1000

EXEMPLE :
Entrée
6
0
1
2
3
9
256
Sortie
0
1
10
11
1001
100000000
*/

function convertToBinaire(array) {
  const result = [];
  array.forEach((element) => {
    result.push(parseInt(element.toString(2)));
  });
  return result;
}

console.log(convertToBinaire([0, 1, 2, 3, 9, 256])); // [ 0, 1, 10, 11, 1001, 100000000 ]
