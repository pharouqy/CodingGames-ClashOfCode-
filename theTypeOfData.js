/*Given a string, you must ouput if its content is an integer, a float or a string.
Entrée
Line 1: A string string to analyse
Sortie
Line 1: The type : integer, float, string
Contraintes
1 ≤ string ≤ 100
Exemple
Entrée
2018
Sortie
integer*/

function theTypeOfData(string) {
  if (!isNaN(string)) {
    if (Number.isInteger(Number(string))) {
      return "integer";
    } else {
      return "float";
    }
  } else {
    return "string";
  }
}

console.log(theTypeOfData("2018")); // integer
console.log(theTypeOfData("farouk")); // string
console.log(theTypeOfData("3.14")); // float
