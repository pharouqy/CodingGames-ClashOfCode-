/*Output number but in words. number is either a 1-digit number or 2-digit number.

The 1-digit numbers are 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', and 'nine'.
The two digit numbers starting with 1 are 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', and 'nineteen'.
Numbers bigger than 20 need a hyphen('-') between their tens and ones digit.
Other than 0 and 10, the multiples of 10 are 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', and 'ninety'.

Example:
If number is 52, output fifty-two
Entrée
Line 1: An integer number for the number you need to output.
Sortie
number in words
Contraintes
1 ≤ number ≤ 99
Exemple
Entrée
52
Sortie
fifty-two*/

function numberToWord(number) {
  const digital1 = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  const digital2 = [
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fiftheen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  const digital3 = [
    "twenty",
    "thirty",
    "fourty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];
  let result;
  if (number < 10) {
    return (result = digital1[number - 1]);
  } else {
    if (number < 20) {
      return (result = digital2[number - 10]);
    } else {
      if (number % 10 == 0) {
        return (result = digital3[number / 10 - 2]);
      } else {
        const digit = digital1[(number % 10) - 1];
        return (result = digital3[Math.trunc(number / 10) - 2]) + "-" + digit;
      }
    }
  }
}

console.log(numberToWord(28)); // twenty-eight
console.log(numberToWord(19)); // nineteen
console.log(numberToWord(40)); // fourty
console.log(numberToWord(1)); // one
console.log(numberToWord(58)); // fifty-eight
