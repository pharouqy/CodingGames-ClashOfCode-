/*The purpose of this Clash of Code is to find the area of ​​the parallelogram and encode in ASCII.
If the number area of ​​the parallelogram consists of several digits, then in the answer you need to write the sum of their ASCII codes.
Entrée
Given the side a of a parallelogram and the h (height) adjacent to this side.
Line 1: An integer h
Line 2: An integer a
Sortie
Line 1 Sum of characters encoded using ASCII encoding
Contraintes
0<h<=100
0<a<=100
Exemple
Entrée
3
3
Sortie
57*/

function areaOfASCII(hieght, width) {
  const area = hieght * width;
  const array = area.toString();
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i].charCodeAt(0);
  }
  return sum;
}

console.log(areaOfASCII(3, 3)); // 57
console.log(areaOfASCII(30, 37)); // 195
console.log(areaOfASCII(25, 73)); // 208
console.log(areaOfASCII(200, 79)); // 254
