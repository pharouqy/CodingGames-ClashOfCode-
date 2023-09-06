/*Le mode de jeu est REVERSE : Vous n'avez pas accès à l'énoncé. Vous devez trouver quoi faire en observant les jeux de tests suivants :
01 Test 1
Entrée
Sortie attendue
asdfa afdas
asdfaasdfaasdfaasdfaasdfa
02 Test 2
Entrée
Sortie attendue
qwqqwq qwq
qwqqwqqwqqwqqwqqwq
03 Test 3
Entrée
Sortie attendue
j lkajsdflkjdslkg
jjjjjjjjjjjjjjj
04 Test 4
Entrée
Sortie attendue
input output
inputinputinputinputinputinput
05 Test 5
Entrée
Sortie attendue
123oiuO*#@ **U*qq9R
123oiuO*#@123oiuO*#@123oiuO*#@123oiuO*#@12*/

function guessHowRepeat(word, string) {
  return word.repeat(string.length);
}

console.log(guessHowRepeat("asdfa", "afdas")); // asdfaasdfaasdfaasdfaasdfa
console.log(guessHowRepeat("qwqqwq", "qwq")); // qwqqwqqwqqwqqwqqwq
console.log(guessHowRepeat("j", "lkajsdflkjdslkg")); // jjjjjjjjjjjjjjj
console.log(guessHowRepeat("input", "output")); // inputinputinputinputinputinput
console.log(guessHowRepeat("123oiuO*#@", "**U*qq9R")); // 123oiuO*#@123oiuO*#@123oiuO*#@123oiuO*#@123oiuO*#@123oiuO*#@123oiuO*#@123oiuO*#@
