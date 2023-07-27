/*Different countries have different standard number of cheek kisses which 2 people exchange while greeting. Assume that the standard number of cheek kisses are as follows: in Poland and Netherlands - 3, in France and Spain - 2, in India - 0.
Count how many cheek kisses will be exchanged at the meeting of: P Polish, N Dutch, F French, S Spanish and I Indian people.

Everyone greets with everyone else. If the number of standard cheek kisses for both people differs, greater number should be chosen to fulfill each person's tradition (for example Dutch and French will cheek kiss 3 times, not 2). The only exception is greeting in a pair of people where at least one is Indian - in such pair cheek kisses are replaced with handshake (to avoid the possibility of inconvenience for anyone).

NOTE: All mentioned rules may vary between regions and environments so they should be treated just as generalisation for the purpose of the problem definition.
Entrée
Line 1: 5 space-separated integers specifying the number of people of each nationality in the meeting P, N, F, S, I.
Sortie
Line 1: A single integer representing the number of cheek kisses exchanged in the meeting.
Contraintes
0 < P + N + F + S + I < 30
Exemple
Entrée
0 1 1 0 0
Sortie
3*/

function numberOfKisses(array) {
  let kisses = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (j === 4) {
        break;
      } else if (i === 0 || i === 1) {
        kisses += 3 * array[i] * array[j];
      } else {
        kisses += 2 * array[i] * array[j];
      }
    }
  }
  return kisses;
}

console.log(numberOfKisses([0, 1, 1, 0, 0])); // 3
console.log(numberOfKisses([10, 5, 1, 7, 0])); // 524
console.log(numberOfKisses([1, 1, 1, 1, 1])); // 17
