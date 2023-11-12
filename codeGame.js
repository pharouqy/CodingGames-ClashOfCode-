/*Jodhaa and Anu are playing a game called Secrets. The aim of the game is to convert a given list of numbers in to secret encrypted numbers based on the following rules
1. Convert all the numbers to their binary form of equal length by padding zeroes at the front.
2. Except first and last characters of the binary replace '1' by '_' and '0' by '/\'
3. For the first and last characters replace '1' by '@' and '0' by '$'
4. Return the encrypted string for all numbers.
Entrée
First line: A single interger N denoting the total integers in the list
Second line: N integers separated by spaces
Sortie
N lines containing the encrypted string for each number
Contraintes
1 <= N <= 100
Exemple
Entrée
8
77 1 79 47 11 54 77 42
Sortie
@/\/\__/\@
@_/\___$
@/\/\___@
$_/\___@
$/\/\_/\_@
$__/\__$
@/\/\__/\@
$_/\_/\_$*/

function codeGame(array) {
  for (let i = 0; i < array.length; i++) {
    let binary = array[i].toString(2).padStart(8, "0");
    let result = [];
    for (let j = 0; j < binary.length; j++) {
      if (j == "0" || j === binary.length - 1) {
        binary[j] == "1" ? result.push("@") : result.push("$");
      } else {
        binary[j] == "1" ? result.push("_") : result.push("/\\");
      }
    }
    console.log(result.join(""));
  }
}

codeGame([77, 110, 79, 47, 11, 54, 77, 42]);
