/*Print the sum of the weights of the vowels in a string S you're given.

The weight of the vowels is as follows:
a=1
e=2
i =3
o=4
u=5

Uppercase vowels weigh twice as much.
Entrée
Line 1: An string S with a random amount of characters.
Sortie
Line 1 : The sum of the weight of each vowel in S.
Contraintes
1 ≤ len(S) ≤ 128
Exemple
Entrée
AAA
Sortie
6*/

function vowelWeightSum(string) {
  let weight = { a: 1, e: 2, i: 3, o: 4, u: 5 };
  let sum = 0;
  for (let i = 0; i < string.length; i++) {
    let char = string[i].toLowerCase();
    if (weight[char] === string[i].toLowerCase()) {
      sum += weight[char];
    } else {
      sum += 2 * weight[char];
    }
  }
  return sum;
}

console.log(vowelWeightSum("AAA")); // 16
console.log(vowelWeightSum("aAEoIU")); // 32
