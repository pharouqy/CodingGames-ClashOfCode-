/*Le mode de jeu est REVERSE : Vous n'avez pas accès à l'énoncé. Vous devez trouver quoi faire en observant les jeux de tests suivants :
01 Test 1
Entrée
Sortie attendue
ABCDefghIJKLmnop
ABCDIJKL
efghmnop
02 Test 2
Entrée
Sortie attendue
LpSOFdpgO
LSOFO
pdpg
03 Test 3
Entrée
Sortie attendue
UPPERCASE
UPPERCASE
04 Test 4
Entrée
Sortie attendue
aaaaaaaaa

aaaaaaaaa*/

function upperLower(string) {
  const upper = string.match(/[A-Z]/g);
  const lower = string.match(/[a-z]/g);
  return [
    upper !== null ? upper.join("") : "",
    lower !== null ? lower.join("") : "",
  ];
}

console.log(upperLower("ABCDefghIJKLmnop")); // ["ABCDIJKL","efghmnop"]
console.log(upperLower("LpSOFdpgO")); // [ 'LSOFO', 'pdpg' ]
console.log(upperLower("UPPERCASE")); // [ 'UPPERCASE', '' ]
console.log(upperLower("aaaaaaaaa")); // [ '', 'aaaaaaaaa' ]
