/*Underscore Robot does not like white spaces and commas in sentences, so it changes all spaces between the words in a sentence (starting always with capital lettered word, and ending with dot ., question mark ?, or exclamation mark !) to underscores. Words have exactly one space between each other and it will be changed to one underscore. It does not change spaces between sentences however. There may be sentences with one word only. In the meantime it removes all commas (if any) as well. Given an input string, write the modified string on the output console.
Entrée
One string input, containing one or more sentences.
Sortie
One string, all spaces changed to underscores between words in each sentence (except spaces between sentences) and commas removed.
Contraintes
5 < input length < 100
Exemple
Entrée
Simple sentence.
Sortie
Simple_sentence.*/

function replaceWithUnderscore(string) {
  const sentence = string.replace(/[,]/g, "").replace(/[ ]/g, "_").split("");

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === "." || sentence[i] === "?" || sentence[i] === "!") {
      sentence[i + 1] = " ";
    }
  }

  return sentence.join("").trim();
}

console.log(replaceWithUnderscore("Farouk est un trés bon développeur!")); // Farouk_est_un_trés_bon_développeur!
console.log(replaceWithUnderscore("Tu vouderais apprendre REACT?")); // Tu_vouderais_apprendre_REACT?
console.log(
  replaceWithUnderscore("Franchement, il fait de plus en plus beau l'été!")
); // Franchement_il_fait_de_plus_en_plus_beau_l'été!
console.log(
  replaceWithUnderscore("Votre réussite est ma réussite aussi, FAROUK!")
); // Votre_réussite_est_ma_réussite_aussi_FAROUK!
