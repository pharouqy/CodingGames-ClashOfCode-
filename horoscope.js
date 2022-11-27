// You have been assigned to provide "Horoscope Readings" for a bunch of people. But that
// is just way too much work and it's a lot of hooey anyway.
// What to do?
// You use a list of 26 common Life-Events and the first 3 unique letters in the person's
// name to fabricate a customized "Horoscope Reading" for each person:
// (1) Find the first 3 unique letters in the name.
// (2) Find the position in the alphabet of each of those letters.
// (3) Find the corresponding position Life-Event in the list.
// Example:
// For "Evelyn" the first 3 unique letters are E V and L
// E is the 5th letter in the alphabet.
// V is the 22th letter in the alphabet.
// L is the 12th letter in the alphabet.
// So her Horoscope Reading is:
// [Name exactly as it is provided]:
// There will be [5th phrase in list] and [22nd phrase in list] and [12th phrase in list] in your future.
// ... which becomes ...
// Evelyn:
// There will be completion of a big project and reconciliation and illness in your future.

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Note: Names often have spaces, hyphens, and periods (and sometimes symbols and numbers) in them: Ignore all that. We only care
//  about letters.
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// The list of 26 common Life-Events is "altruistic acts, an award, a breakup, career change, completion of a big project, crime,
//  disappointment, disaster, an epic experience, new love, forgiveness, illness, injury, incarceration, inspiration, investment
//   gain, lifestyle change, a new friend, moments of wonder and clarity, a move, realizing something important, reconciliation,
//    redemption, solving a problem, a transformative experience, a trip"
// Source of the list: https://simplicable.com/en/life-events
// Sortie
// Their 2 line "Horoscope Reading" as described above.
// It should read as a normal sentence, including proper spacing.
// Contraintes
// name will have at least 3 unique letters.
// name can be upper or lower case or any combination thereof.
// name can contain letters, numbers, and symbols.
// Frank
// There will be crime and a new friend and altruistic acts in your future.

function horoscope(str) {
  str = str.toLowerCase().replace(/[ -_\'\`/\\]/, "");
  const uniqueLetters = [...new Set(str)];
  const threeFirstletters = uniqueLetters.slice(0, 3);
  let final = [];
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const sentences =
    " altruistic acts, an award, a breakup, career change, completion of a big project, crime, disappointment, disaster, an epic experience, new love, forgiveness, illness, injury, incarceration, inspiration, investment gain, lifestyle change, a new friend, moments of wonder and clarity, a move, realizing something important, reconciliation, redemption, solving a problem, a transformative experience, a trip";
  const lifeEvents = sentences.split(",");
  for (let l = 0; l < alphabet.length; l++) {
    for (let r = 0; r < 3; r++) {
      if (threeFirstletters[r] === alphabet[l]) {
        final.push(lifeEvents[l]);
      }
    }
  }
  return `There will be${final[1]} and${final[2]} and${final[0]} in your future.`;
}

console.log(horoscope("Frank")); // There will be crime and a new friend and altruistic acts in your future.
console.log(horoscope("Youcef")); // There will be realizing something important and a transformative experience and inspiration in your future.
console.log(horoscope("Evelyn")); // There will be illness and reconciliation and completion of a big project in your future.
