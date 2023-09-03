/*When picking a password, you might choose a word and replace some of the characters with others that look alike. One famous substitution is called leet (or 133t, leetspeak). So, when brute-forcing passwords, one can use different rules to turn a word into multiple variants in order to increase the chance of guessing right.

Generate all possible variants of word by replacing zero or more characters with their 1337 counterpart according to this table (case-insensitive).

A -> 4
E -> 3
I -> 1
L -> 1
T -> 7
O -> 0

Output all possible variants, one on each line, in lexicographical order (for most languages, this is the standard string sorting).
Entrée
Line 1 : The word to apply your rule on
Sortie
n lines: one variant of word on each line
where n is the number of possible variants
Contraintes
Exemple
Entrée
Hi
Sortie
H1
Hi*/

function leetPickVariant(word) {
  const obj = {
    a: 4,
    e: 3,
    i: 1,
    l: 1,
    t: 7,
    o: 0,
  };
  let leet = "";
  for (let i = 0; i < word.length; i++) {
    if (obj.hasOwnProperty(word[i].toLowerCase())) {
      leet += obj[word[i].toLowerCase()];
    } else {
      leet += word[i];
    }
  }
  return leet;
}

console.log(leetPickVariant("Hi")); // H1
console.log(leetPickVariant("passWord")); // p4ssW0rd
console.log(leetPickVariant("Space OK")); // Sp4c3 0K
console.log(leetPickVariant("Special123!")); // Sp3c141123!
console.log(leetPickVariant("leet")); // 1337
console.log(leetPickVariant("Bunny")); // Bunny
