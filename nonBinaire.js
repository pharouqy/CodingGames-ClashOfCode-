/*Votre programme doit effectuer un NON binaire sur le nombre binaire donné par l'entrée standard, et afficher le résultat sur la sortie standard.

Attention, le nombre de chiffres binaires doit rester le même.

ENTRÉE :
1 nombre binaire B.

SORTIE :
Le résultat d'un NOT sur B.

EXEMPLE :
Entrée
001
Sortie
110*/

function nonBinaire(binaire) {
  let result = "";
  for (let i = 0; i < binaire.length; i++) {
    result += binaire[i] === "0" ? "1" : "0";
  }
  return result;
}
console.log(nonBinaire("001")); // 110
console.log(nonBinaire("110")); // 001
console.log(nonBinaire("010")); // 101
console.log(nonBinaire("111")); // 000
