/*count the 1s in the 8 bits and multiply the resulting integer by 2
Entrée
line 1 8 binary digits byte
Sortie
An integer N , which is double the 1s that exist in the 8 binary digits given in input.
Contraintes
byte is always 8 characters long
Exemple
Entrée
00101110
Sortie
8*/

function countIn8Byte(binary) {
  const array = binary.split("");
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "1") {
      count++;
    }
  }
  return count * 2;
}

console.log(countIn8Byte("10011101")); // 10
console.log(countIn8Byte("10111010")); // 10
console.log(countIn8Byte("11110101")); // 12
console.log(countIn8Byte("11101110")); // 12
