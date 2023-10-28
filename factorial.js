/*Output the factorial of the integer N if N is positive
Entrée
An integer N to convert.
Sortie
If the integer provided isn't negative output a factorial of N else output "No negative integers"
Contraintes
-100 ≤ N ≤ 100
Exemple
Entrée
5
Sortie
120*/

function factorial(number) {
  if (number === 0 || number === 1) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}

console.log(factorial(5)); // 120
console.log(factorial(7)); // 5040
console.log(factorial(3)); // 6
console.log(factorial(1)); // 1
console.log(factorial(9)); // 362880
