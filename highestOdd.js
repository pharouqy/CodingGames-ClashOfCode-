/*You will be given M values. Each value is an integer N. You must print the next highest odd number unless N is already odd then print N
Entrée
Line 1: An integer M for the number of integer values that follow.
Next M Lines: M number of integer values.
Sortie
M Lines: M integers that if integer N at line M of input is odd then print N otherwise print the next highest odd integer.
Contraintes
1 <= M <= 100
-10000 <= N <= 10000
Exemple
Entrée
10
-64
71
-98
-60
-18
41
88
-2
-24
63
Sortie
-63
71
-97
-59
-17
41
89
-1
-23
63*/

function highestOdd(array) {
  return array.map((element) => {
    if (element % 2 === 0) {
      return element + 1;
    } else {
      return element;
    }
  });
}

console.log(highestOdd([-64, 72, -98, -60, -18, 41, 88, -2, -24, 63])); // [-63, 73, -97, -59, -17, 41, 89, -1, -23, 63]