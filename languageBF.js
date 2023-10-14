/*The Simple BF language consists of three characters and a single 8-bit value in memory.
+ indicates to increment that value.
- decrements it.
. means output the current ASCII value.

This value cannot underflow or overflow.
If the memory value would become negative, value < 0, output UNDERFLOW.
If the memory value would exceed 8-bit, value > 255, output OVERFLOW.
The value starts at 0.
Entrée
A string only consisting of characters + - .
Sortie
The output string of the program if the memory stays within bounds.
Otherwise UNDERFLOW or OVERFLOW.
Contraintes
0 < input length < 1024
0 <= memory value < 256
Exemple
Entrée
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++.++++++++++++.-----------.+.-----------------------.
Sortie
CODE.*/

function languageBF(string) {
  const array = string.split("");
  let memory = 0;
  let result = "";
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "+") {
      memory++;
    } else if (array[i] === "-") {
      memory--;
    } else if (array[i] === ".") {
      result += String.fromCharCode(memory);
    }
  }
  return result;
}

console.log(
  languageBF(
    "+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++.++++++++++++.-----------.+.-----------------------."
  )
); // CODE.
