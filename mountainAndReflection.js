/*Input is a mountain of uppercase letters.

Output that same mountain.
Then put a line of water (which is shown as ~) underneath it. This is the same width as mountain's base)
Followed by the mountain's reflection in the water.

(Reflection is dimmer than the mountain itself, so change uppercase letters to their lowercase equivalent in the reflection)
Entrée
Line 1: An integer, height of mountain
Next height Lines: mountain
Sortie
height Lines: mountain
Next Line: water
Next height Lines: the reflection
Contraintes
Exemple
Entrée
2
 QQQ
RRRRRR
Sortie
 QQQ
RRRRRR
~~~~~~
rrrrrr
 qqq*/

function mountainAndReflection(string) {
  const array = string.split("+");
  const mountain = [];
  const reflection = [];
  for (let i = 0; i < array.length; i++) {
    mountain.push(array[i]);
    reflection.unshift(array[i].toLowerCase());
  }
  for (let row in mountain) {
    console.log(mountain[row]);
  }
  console.log("~".repeat(reflection[0].length));
  for (let row in reflection) {
    console.log(reflection[row]);
  }
}

mountainAndReflection(" QQQ +RRRRRR"); // 
