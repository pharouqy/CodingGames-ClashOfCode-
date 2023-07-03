/*Votre programme doit calculer la valeur d'une fonction affine aux points donnés.

Une fonction affine est une fonction de la forme f(x) = a * x + b avec a et b, deux constantes. On vous donne a, b et un ensemble de N valeurs de x. Vous devez calculer la valeur de f(x) pour les N valeurs de x.

ENTRÉE :
Ligne 1 : deux entiers a et b séparés par un espace
Ligne 2 : un entier N
N lignes suivantes : un entier x sur chaque ligne

SORTIE :
N lignes : la valeur de f(x) pour chaque valeur de x fournie en entrée

CONTRAINTES :
-100 < a, b < 100
-100 < x < 100

EXEMPLE :
Entrée
5 -2
3
3
8
-1
Sortie
13
38
-7*/

function afine(a, b, array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(a * array[i] + b);
  }
  return result;
}

console.log(afine(5, -2, [13, 38, -7])); // [ 63, 188, -37 ]
