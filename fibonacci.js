/*Votre programme doit afficher les N premiers termes de la suite de Fibonacci.

Chaque terme de la suite de Fibonacci est calculé en additionnant les deux termes précédents de la suite, à l'exception des deux premiers termes qui sont 0 et 1.
Le troisième terme est donc 1 (0 + 1 = 1), le quatrième terme 2 (1 + 1 = 2), le cinquième 3 (1 + 2 = 3), le sixième 5 (2 + 3 = 5), et ainsi de suite.

Le début de la suite de Fibonacci est : 0, 1, 1 , 2 , 3 , 5 , 8 , 13, 21 ...

ENTRÉE :
Un entier N.

SORTIE :
Une ligne contenant les N premiers nombres de la suite de Fibonacci, séparés par des espaces.

CONTRAINTES :
0 < N ≤ 47

EXEMPLE :
Entrée
5
Sortie
0 1 1 2 3*/

function fibonacci(number) {
  const array = [0, 1];
  while (array.length < number) {
    array.push(array[array.length - 2] + array[array.length - 1]);
  }
  return array.slice(0, number);
}

console.log(fibonacci(5)); // [ 0, 1, 1, 2, 3 ]
console.log(fibonacci(10)); // [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]
console.log(fibonacci(16)); // [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610 ]
