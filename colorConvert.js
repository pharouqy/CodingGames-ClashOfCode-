/*A web color is represented by a number sign #, followed by three bytes, each of them represented by two hexadecimal digits, which are the rate of each Red, Green and Blue color (between 0 and 255).
You are given a hexadecimal triplet, and you have to return the value of each RGB color rate.
Entrée
Line 1: A hexadecimal triplet (three bytes, one per color): #RRGGBB
Sortie
Line 1: The red rate (0-255) in base 10
Line 2: The green rate (0-255) in base 10
Line 3: The blue rate (0-255) in base 10
Contraintes
Each input character (excepted #) is a hexadecimal digit (0-9, A-F)
Exemple
Entrée
#FF0000
Sortie
255
0
0
*/

function colorConvert(color) {
  const hexa = color.split("#")[1];
  const array = [];
  for (let i = 0; i < hexa.length; i++) {
    if (i % 2 === 0) {
      array.push([hexa[i], hexa[i + 1]]);
    }
  }
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(parseInt(array[i].join(""), 16));
  }
  return result;
}

console.log(colorConvert("#FF0000")); // [ 255, 0, 0 ]
console.log(colorConvert("#05FF00")); // [ 5, 255, 0 ]
console.log(colorConvert("#0000FF")); // [ 0, 0, 255 ]
console.log(colorConvert("#FFFFFF")); // [ 255, 255, 255 ]
