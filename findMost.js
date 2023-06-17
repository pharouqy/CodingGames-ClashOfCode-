/*Over the centuries a language evolves, and not only do words appear or disappear, but some letters become more used or on the contrary less used.

In order to be able to quickly analyze many texts, we want to develop a program that calculates how many times a given letter is present in a text.
Entrée
Line 1: A character C that will be searched for
Line 2: An integer N
Next N lines: a string with length len
Sortie
the number of times that C appears in the text
Contraintes
0 ≤ len ≤ 1000
Exemple
Entrée
E
2
JE VOUS REMECTZ A LA GRANDE CHRONICQUE PANTAGRUELINE 
RECONGNOISTRE LA GENEALOGIE ET ANTIQUITE DONT NOUS EST VENU GARGANTUA
Sortie
16*/

function findMost(sentence, letter) {
  let count = 0;
  const lettres = sentence.split("");
  for (let i = 0; i < lettres.length; i++) {
    if (lettres[i] === letter) {
      count++;
    }
  }
  return count;
}

console.log(
  findMost(
    "JE VOUS REMECTZ A LA GRANDE CHRONICQUE PANTAGRUELINE RECONGNOISTRE LA GENEALOGIE ET ANTIQUITE DONT NOUS EST VENU GARGANTUA",
    "E"
  )
); // 16
