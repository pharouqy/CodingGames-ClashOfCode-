/*Given an integer n.

For each number of n, if it is odd it should be replaced with '*' and if it is even it should be replaced with '#'.


Given the integer : 253

2 is even then shoud be replaced with #,
5 is odd then shoud be replaced with *,
3 is odd then shoud be replaced with *.

So the encoded result is : #**
Entrée
The integer n
Sortie
The encoded result
Contraintes
Exemple
Entrée
2057
Sortie
##***/

function encodedNumber(number) {
  const array = number.toString().split("");
  let result = "";
  for (let i = 0; i < array.length; i++) {
    if (parseInt(array[i]) % 2 === 0) {
      result += "#";
    } else {
      result += "*";
    }
  }
  return result;
}

console.log(encodedNumber(2057)); // ##**
console.log(encodedNumber(6549879823198445)); // #*#*#**##***###*
console.log(encodedNumber(3469578563792415667934)); // **##***#*#***##*****#*
console.log(encodedNumber(1984)); // **##
