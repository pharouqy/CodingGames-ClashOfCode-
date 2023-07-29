/*Kyle wants to practice typing as fast as possible to impress his friends.
Calculate the number of words he types per minute, taking into account the time and the number of errors.

Typing speed formula :
(number of characters typed/5-errors)/time(in minutes)
Entrée
Line 1 : A string words for the words to type.
Line 2 : A string typed for the words he typed.
Line 3 : A integer time for the time (in seconds) he took to type.
Sortie
Line 1 : The number of words per minute (rounded to the nearest integer).
Contraintes
0 ≤ words ≤ 10000
0 ≤ typed ≤ 10000
Exemple
Entrée
pneumonoultramicroscopicsilicovolcanoconiosis
pneumonoultramiproscopicsilicodolcanoconiofis
5
Sortie
72*/

function typing(words, typed, time) {
  const WORDS = words.split("");
  const TYPED = typed.split("");
  const TIMEMINUTES = time / 60;
  let errors = 0;
  for (let i = 0; i < WORDS.length; i++) {
    if (TYPED[i] !== WORDS[i]) {
      errors++;
    }
  }
  return Math.round((TYPED.length / 5 - errors) / TIMEMINUTES);
}

console.log(
  typing(
    "pneumonoultramicroscopicsilicovolcanoconiosis",
    "pneumonoultramiproscopicsilicodolcanoconiofis",
    5
  )
); // 72
console.log(
  typing(
    "Farouk est un developpeurs accomplis !!!",
    "Farpuk ezt un dpveloppeurs accozplis !!!",
    2
  )
); // 120
console.log(
  typing(
    "hfqlkhfqdklhfqkhfqkldfhqdkjfuiae;kjqxhkqffuqfh",
    "pfalkhfqsdlhfqkhfqkldfhqdkjfuiaemkjqxhkqdfhqfh",
    10
  )
); // 13
console.log(
  typing(
    "qhqfuqfuiqfbbvnwvkgdqkfauifaekhaeiuyeurhaejkhfuaqjkfqlfyulafoapofhamfhqfq",
    "qhqfuqfuiqfbbvnwvkgdqkfauifaekhaeiuyeurhaajkhfuaqjkfqlfyulafoapofhamfhqfq",
    15
  )
); // 54
