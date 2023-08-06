/*You're given a pens, each pen can write up to b characters. Based on given sentence s you must calculate minimum pens to write a sentence.

Spaces and characters: . , ' " ; don't count into characters that use up the pen.
Entrée
Line 1: a pens given
Line 2: b maximum characters written by pen
Line 3: s sentence needed to be written with pens
Sortie
Line 1: Minimum number of pens needed to write a text followed by Enough if there is enough pens or Not enough if there is not enough pens to write whole sentence.
Contraintes
Exemple
Entrée
1
30
This one seems to be a simple test
Sortie
1 Enough*/

function pensToWriteAText(pens, maxCharWithPen, sentence) {
  const array = sentence.replace(/[.,'" ]/g, "").split("");
  const numberOfPens = array.length / maxCharWithPen;
  return numberOfPens > pens
    ? `Not enough`
    : `${Math.round(numberOfPens)} Enough`;
}

console.log(pensToWriteAText(1, 30, "This one seems to be a simple test")); // 1 Enough
console.log(pensToWriteAText(4, 5, "Je code donc je suis")); // 3 Enough
console.log(
  pensToWriteAText(
    4,
    5,
    "Younsi Farouk, developpeur web avec une maitrise avancer de l'HTML, CSS et JavaScript."
  )
); // Not enough
