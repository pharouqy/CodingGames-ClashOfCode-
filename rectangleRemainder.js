/*You are given the height and the width of a rectangle and its starting fill character (char1).
So make that rectangle, and assume the top left of it is (0,0).

You are also given a modNumber number and a desiredRemainder number.

Replace any points in that rectangle with char2 where this is true:
(rowNumber PLUS colNumber) MOD modNumber EQUALS desiredRemainder 




Note: char2 might be a blank space
Entrée
Line 1: a two-character string that can be broken into char1 and char2
Line 2: Four integers: height width modNumber desiredRemainder (separated by a space)
Sortie
height Lines: rectangle (with those slanted-stripes added)
Contraintes
modNumber is a positive integer
desiredRemainder is a non-negative integer
Exemple
Entrée
o-
40 9 7 0
Sortie
-oooooo-o
oooooo-oo
ooooo-ooo
oooo-oooo
ooo-ooooo
oo-oooooo
o-oooooo-
-oooooo-o
oooooo-oo
ooooo-ooo
oooo-oooo
ooo-ooooo
oo-oooooo
o-oooooo-
-oooooo-o
oooooo-oo
ooooo-ooo
oooo-oooo
ooo-ooooo
oo-oooooo
o-oooooo-
-oooooo-o
oooooo-oo
ooooo-ooo
oooo-oooo
ooo-ooooo
oo-oooooo
o-oooooo-
-oooooo-o
oooooo-oo
ooooo-ooo
oooo-oooo
ooo-ooooo
oo-oooooo
o-oooooo-
-oooooo-o
oooooo-oo
ooooo-ooo
oooo-oooo
ooo-ooooo*/

function rectangleRemainder(chars, height, width, modNumber, desiredRemainder) {
  const [char1, char2] = chars.split("");
  for (let i = 0; i < height; i++) {
    let result = "";
    for (let j = 0; j < width; j++) {
      if ((i + j) % modNumber === desiredRemainder) {
        result += char2;
      } else {
        result += char1;
      }
    }
    console.log(result);
  }
}

rectangleRemainder("o-", 40, 9, 7, 0); // 
