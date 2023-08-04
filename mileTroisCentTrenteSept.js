/*Votre programme doit prendre la chaîne de caractères donnée et l'afficher en version 1337.

Pour convertir une chaîne en 1337 il faut remplacer (que ce soit des majuscules ou des minuscules) :
les 'O' par des '0'.
les 'L' par des '1'.
les 'Z' par des '2'.
les 'E' par des '3'.
les 'A' par des '4'.
les 'S' par des '5'.
les 'G' par des '6'.
les 'T' par des '7'.
les 'B' par des '8'.
les 'Q' par des '9'.

ENTRÉE :
Une chaîne de caractères S.

SORTIE :
La chaîne S convertie en 1337.

CONTRAINTES :
S contient au moins 1 caractère.

EXEMPLE :
Entrée
Hello World
Sortie
H3110 W0r1d*/

function mileTroisCentTrenteSept(sting) {
  const word = sting.split("");
  const code = {
    O: "0",
    L: "1",
    Z: "2",
    E: "3",
    A: "4",
    S: "5",
    G: "6",
    T: "7",
    B: "8",
    Q: "9",
  };
  let result = "";
  for (let i = 0; i < word.length; i++) {
    if (code[word[i].toUpperCase()]) {
      result += code[word[i].toUpperCase()];
    } else {
      result += word[i];
    }
  }

  return result;
}

console.log(mileTroisCentTrenteSept("Hello World")); // H3110 W0r1d
console.log(mileTroisCentTrenteSept("Awsome Code")); // 4w50m3 C0d3
console.log(mileTroisCentTrenteSept("Farouk Younsi")); // F4r0uk Y0un5i
