/*You are given a string s with letters and digits. You need to output on one line the string without digits. And on the second line the sum of all the digits in the string

Note :
Digits will always be positive integers.
If you have 2 digits in a row : you have to sum them
Example :
23a5 -> 2+3+5 = 10
Entrée
Line 1: A string, s
Sortie
Line 1: The string without digits
Line 2: The sum of all digits in the string
Contraintes
1≤ length of s < 256
Atleast one digit in s
Exemple
Entrée
H3e1llo0 W8or2ld !
Sortie
Hello World !
14*/

function stringAndSum(string) {
  const array = string.split("");
  let line1 = [];
  let line2 = 0;
  for (let i = 0; i < array.length; i++) {
    if (/^[a-zA-ZÀ-ÖØ-öø-ÿ\s\-\_\'!?.,;:.]+$/g.test(array[i])) {
      line1.push(array[i]);
    } else {
      line2 += parseInt(array[i]);
    }
  }
  return [line1.join(""), line2];
}

console.log(
  stringAndSum(
    "J3e n3e parl90erai p1as, j3e n3e pens45erai rien : Ma98is l'am00our inf11ini me montera dans l'â43me, Et j'i56rai lo89in, bi45en loin, co123mme un b6ohémien, Par l7a natu3re, heu90reux com5me a2ve3c u0ne3 fe3mme3."
  )
); // ["Je ne parlerai pas, je ne penserai rien : Mais l'amour infini me montera dans l'âme, Et j'irai loin, bien loin, comme un bohémien, Par la nature, heureux comme avec une femme.", 144]
console.log(stringAndSum("Fa4589r4587o54uk44!")); // [ 'Farouk!', 67 ]
