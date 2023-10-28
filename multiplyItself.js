/*Given a number you must multiply it by itself and all numbers below it and return the total sum of each multiplication.

Example 1:
Input = 5
5*5+5*4+5*3+5*2+5*1=75
return 75

Example 2:
Input = 3
3*3+3*2+3*1=18
return 18
Entrée
Line 1: An integer N as the number to use to multiply.
Sortie
Line 1: An integer.
Contraintes
0 ≤ N ≤ 9999
Exemple
Entrée
4
Sortie
40*/

function multiplyItself(number) {
  let result = 0;
  for (let i = 0; i <= number; i++) {
    result += number * i;
  }
  return result;
}

console.log(multiplyItself(4)); // 40
console.log(multiplyItself(7)); // 196
console.log(multiplyItself(3)); // 18
console.log(multiplyItself(2)); // 6
console.log(multiplyItself(13)); // 1183
