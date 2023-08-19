/*Print "Ok" if the super-long integer N is not divisible by four.
Print "AAAAAAAAAA!!!" otherwise.
Entrée
A super long integer N
Sortie
Ok or AAAAAAAAAA!!!
Contraintes
1≤ N ≤ 10000000000000000000000000000000000000000000000000000
000000000000000000000000000000000000000000000000
Exemple
Entrée
1
Sortie
Ok*/

function divisibleByFour(number) {
  if (number % 4 !== 0) {
    return "Ok";
  } else {
    return "AAAAAAAAAA!!!";
  }
}

console.log(divisibleByFour(4)); // AAAAAAAAAA!!!
console.log(divisibleByFour(6)); // Ok