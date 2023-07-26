/*Votre programme doit inverser la casse d'une chaîne donnée.

ENTRÉE :
S une chaîne de charactères.

SORTIE :
S avec des minuscules à la place des majuscules et inversement.

CONTRAINTES :
S contient au moins 1 caractère.

EXEMPLE :
Entrée
Hello World
Sortie
hELLO wORLD*/

function inverser(string) {
  const array = string.split("");
  let result = [];
  array.forEach((element) => {
    if (/[A-Z]/g.test(element)) {
      result.push(element.toLowerCase());
    } else {
      result.push(element.toUpperCase());
    }
  });
  return result.join("");
}

console.log(inverser("Hello World")); // hELLO wORLD
console.log(inverser("FaRoUk YoUnSi")); // fArOuK yOuNsI
