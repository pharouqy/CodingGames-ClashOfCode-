/*The Dvorak key layout is a keyboard layout invented by Professor August Dvorak at the University of Washington in the 1930s. The key layout is very different from the QWERTY layout that is widely used today, but there are still a few people who are fascinated by it and still use it in their quest for more efficient typing...

Now, what we are going to do in this problem is to output how a string entered in a QWERTY array will appear when typed in the same way in a Dvorak array.

For reference, here is the sequence of the QWERTY array and the Dvorak array.

QWERTY (US Style):
1234567890-=
qwertyuiop[]
asdfghjkl;'
zxcvbnm,./

Dvorak:
1234567890[]
',.pyfgcrl/=
aoeuidhtns-
;qjkxbmwvz
Entrée
A string entered in a QWERTY array.
Sortie
The string of characters displayed when the input string is typed on a Dvorak keyboard.
Contraintes
All alphabets used for both input and output are in LowerCASE.
It is also guaranteed that no symbols other than those that appear in the above description will be present in the input string.
Whitespace is handled the same way in both QWERTY and Dvorak.

Note that this is NOT a question of converting QWERTY and Dvorak arrays to and from each other. The direction of the conversion is always one-way, from QWERTY to Dvorak.
Exemple
Entrée
hello, world
Sortie
d.nnrw ,rpne*/

function translateToDovrak(string) {
  const qwerty = "1234567890-=qwertyuiop[]asdfghjkl;'zxcvbnm,./";
  const dvorak = "1234567890[]',.pyfgcrl/=aoeuidhtns-;qjkxbmwvz";
  const charMap = {};
  for (let i = 0; i < qwerty.length; i++) {
    charMap[qwerty[i]] = dvorak[i];
  }
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] in charMap) {
      result += charMap[string[i]];
    } else {
      result += string[i];
    }
  }
  return result;
}

console.log(translateToDovrak("hello, world")); // d.nnrw ,rpne
console.log(translateToDovrak("younsi farouk")); // frgboc uaprgt
