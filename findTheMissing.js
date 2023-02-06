/*
Le programme :
Le programme doit afficher le chiffre manquant pour chaque ligne.

ENTRÉE :
Ligne 1 : Un entier N pour le nombre de lignes à traiter.
N prochaines lignes : Un string line représentant les 9 chiffres (sans espaces).

SORTIE :
Ligne 1 : Le chiffre manquant

CONTRAINTES :
0 < N < 1000

EXEMPLE :
Entrée
1
123456789
Sortie
0

205749368
063981547
032945671
071863245
341527968
803751429
190854376
183972540
603285791
723695148

*/

function findTheMissing(string) {
  const arr = string.split(" ");
  for (let index of arr) {
    const array = index.split("");
    array.sort((a, b) => {
      return a - b;
    });
    for (let i = 0; i < array.length; i++) {
      if (parseInt(array[i]) + 1 !== parseInt(array[i + 1])) {
        return i + 1;
      } else if (parseInt(array[0]) == 1) {
        return 0;
      }
    }
  }
}

console.log(findTheMissing("205749368")); // 1
console.log(findTheMissing("063981547")); // 2
console.log(findTheMissing("032945671")); // 8
console.log(findTheMissing("071863245")); // 9
console.log(findTheMissing("341527968")); // 0
console.log(findTheMissing("803751429")); // 6
console.log(findTheMissing("190854376")); // 2
