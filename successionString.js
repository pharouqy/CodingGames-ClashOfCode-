/*Le mode de jeu est REVERSE : Vous n'avez pas accès à l'énoncé. Vous devez trouver quoi faire en observant les jeux de tests suivants :
01 Test 1
Entrée
Sortie attendue
5
_
_
 _
  _
   _
    _
02 Test 2
Entrée
Sortie attendue
3
+
+
 +
  +
03 Test 3
Entrée
Sortie attendue
2
-
-
 -
04 Test 4
Entrée
Sortie attendue
4
$
$
 $
  $
   $
Sortie console
*/

function successionString(number, string) {
  for (let i = 0; i < number; i++) {
    console.log(" ".repeat(i).concat(string));
  }
  return;
}

successionString(10, "%");
successionString(5, "#");
successionString(12, "$");
successionString(30, "_");
successionString(80, "z");
