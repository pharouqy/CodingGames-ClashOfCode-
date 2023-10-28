/*This challenge is about expressing a birthday differently via a string of alphabet from "A...J". Each character's index will correspond (0..9) respectively.
The input sequence will contain "-" or "/" it will correspond to the seperation between day month and year.
PS: All the inputs will translate to valid dates
Entrée
Line 1: A String DT to be decoded.
Sortie
Line 1: A String Birthday, the output after you have finished decoding it and it should contain "-" or "/" like the input to seperate the day, month and year.
Contraintes
The DT length should be:
11<DT.length<20
Exemple
Entrée
AB-AB-CAAB
Sortie
01-01-2001*/

function formateDate(string) {
  const alphabeut = "abcdefghijklmnopqrstuvwxyz";
  const date = string.split("");
  const result = [];
  for (let i = 0; i < date.length; i++) {
    for (let j = 0; j < alphabeut.length; j++) {
      if (date[i] === alphabeut[j].toUpperCase()) {
        result.push(j);
      } else if (date[i] === "/") {
        result.push("/");
        break;
      } else if (date[i] === "-") {
        result.push("-");
        break;
      }
    }
  }
  return result.join("");
}

console.log(formateDate("AB-AB-CAAB")); // 01-01-2001
console.log(formateDate("AH/BA/BJIE")); // 07/10/1984
