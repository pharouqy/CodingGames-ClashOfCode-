/*Given a String you must output the average ASCII value of that string. For example :
Input: "abc"
Output: 98
Entrée
Input: A string
Sortie
Output: Average ASCII value of that String rounded down.
Contraintes
String contains no spaces
Exemple
Entrée
abc
Sortie
98*/

function averageASCII(string) {
  const array = string.split("");
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i].charCodeAt(0);
  }
  return Math.floor(sum / array.length);
}

console.log(averageASCII("abc")); // 98
console.log(averageASCII("aaaa")); // 97
console.log(averageASCII("aboABC")); // 84
console.log(averageASCII("123")); // 50
