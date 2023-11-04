/*In a Jewish calendar, there are 12 months in a REGULAR year, and 13 months in a LEAP year.
In each year, there are 5 months with 29 days, 5 months with 30 days, and 2 months that the days in them is changed:
- if the year is MISSING - the 2 months have 29 days
- if the year is SERIAL - one month has 29 days and the second has 30 days
- if the year is FULL - the 2 months have 30 days
The added month in a leap year has 29 days.

Giving the type of the year, output the number of days in this year
Entrée
Line 1: REGULAR or LEAP
Line 2: MISSING, SERIAL or FULL
Sortie
Line 1: The number of days in the year
Contraintes
Exemple
Entrée
REGULAR
MISSING
Sortie
353*/

function jewishCalendar(...string) {
  const [isLeap, yearType] = [...string];
  let sum = 0;
  if (isLeap === "REGULAR") {
    if (yearType === "MISSING") {
      sum = 5 * 29 + 5 * 30 + 2 * 29;
    } else if (yearType === "SERIAL") {
      sum = 5 * 29 + 5 * 30 + 1 * 29 + 1 * 30;
    } else if (yearType === "FULL") {
      sum = 5 * 29 + 5 * 30 + 2 * 30;
    }
  } else if (isLeap === "LEAP") {
    if (yearType === "MISSING") {
      sum = 5 * 29 + 5 * 30 + 2 * 29 + 29;
    } else if (yearType === "SERIAL") {
      sum = 5 * 29 + 5 * 30 + 1 * 29 + 1 * 30 + 29;
    } else if (yearType === "FULL") {
      sum = 5 * 29 + 5 * 30 + 2 * 30 + 29;
    }
  }
  return sum;
}

console.log(jewishCalendar("REGULAR", "MISSING")); // 353
console.log(jewishCalendar("REGULAR", "SERIAL")); // 354
console.log(jewishCalendar("REGULAR", "FULL")); // 355
console.log(jewishCalendar("LEAP", "MISSING")); // 383
console.log(jewishCalendar("LEAP", "SERIAL")); // 384
console.log(jewishCalendar("LEAP", "FULL")); // 385
