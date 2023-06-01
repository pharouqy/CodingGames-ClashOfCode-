/*You are a prisoner locked for crimes against coding and plagiarism (essentially, you've been caught copying someone's code!). You've been given the chance to earn your freedom by deciphering the code they give you!

The guards will give you a seemingly random number, and a jumbled up word. Each number corresponds to the real position of each letter in the true word. You need to form the true word!

Example:
The input is: 15243
The jumbled up word is: enaet
Using the code, you can figure out that "e" is the first letter, "a" is the second,
"t" is the third, and so on, giving the word "eaten"

See if you can do it. Good Luck!
Entrée
First Line: An Integer N
Second Line: A String S
Sortie
A non-jumbled up string that follows the statement's idea.
Contraintes
3 <= S.length <= 9
Exemple
Entrée
15243
enaet
Sortie
eaten*/

function breakCodePrisonner(string, numbers) {
  const alpha = string.split("");
  const jumbled = numbers.split("");
  const jumbledAlpha = {};
  for (let i = 0; i < jumbled.length; i++) {
    jumbledAlpha[parseInt(jumbled[i])] = alpha[i];
  }
  return Object.values(jumbledAlpha).join("");
}

console.log(breakCodePrisonner("enaet", "15243")); // eaten
console.log(breakCodePrisonner("kaforu", "621435")); // farouk
