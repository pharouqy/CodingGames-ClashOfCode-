/*Given the year, print the number of days in February in the year. In addition, print the type of year. The type of year is determined using the following rule:

*If the year value is divisible by 400, its type is L.
*If the year value isn't divisible by 400 but is divisible by 100, its type is H.
*If the year value isn't divisible by 100 but is divisible by 4, its type is F.
*If the year value isn't divisible by 4, its type is N.
Entrée
Line 1: One line that has one integer, year.
Sortie
Line 1: The number of days in February in year and the type of the year as described in the in Statement. Separate the two values by space.
Contraintes
0 < year < 10000
Exemple
Entrée
3003
Sortie
28 N*/

function leapYear(year) {
  if (year % 400 === 0) {
    return "29 L";
  } else if (year % 400 !== 0 && year % 100 === 0) {
    return "28 H";
  } else if (year % 4 === 0 && year % 100 !== 0) {
    return "29 F";
  } else if (year % 4 !== 100) {
    return "28 N";
  }
}

console.log(leapYear(3003)); // 28 N
console.log(leapYear(3053)); // 28 N
console.log(leapYear(2028)); // 29 F
console.log(leapYear(30012)); // 29 F
