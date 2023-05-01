/*Le mode de jeu est REVERSE : Vous n'avez pas accès à l'énoncé. Vous devez trouver quoi faire en observant les jeux de tests suivants :
01 Test 1
Entrée
Sortie attendue
1+1 2
9
02 Test 2
Entrée
Sortie attendue
2+2 4
81
03 Test 3
Entrée
Sortie attendue
another 3
343
04 Test 4
Entrée
Sortie attendue
okYouWin -2
0.015625
05 Test 5
Entrée
Sortie attendue
WhatIsFivePlusFour? 9
322687697779
06 Test 6
Entrée
Sortie attendue
ThisClashIsQuiteEasyRight? 11
3670344486987776
07 Test 7
Entrée
Sortie attendue
RandomNumber: 7
62748517
08 Test 8
Entrée
Sortie attendue
WhyCantJavascriptPass?! 10
41426511213649
09 Test 9
Entrée
Sortie attendue
NowIsTest9!YouDidIt! 14
1638400000000000000
10 Test 10
Entrée
Sortie attendue
O 144853
1*/

function asiiMathPow(string, number) {
  let sum = 0;
  sum += Math.pow(string.length, number);
  return sum;
}

console.log(asiiMathPow("1+1", 2)); // 9
console.log(asiiMathPow("2+2", 4)); // 81
console.log(asiiMathPow("another", 3)); // 343
console.log(asiiMathPow("okYouWin", -2)); // 0.015625
console.log(asiiMathPow("WhatIsFivePlusFour?", 9)); // 322687697779
console.log(asiiMathPow("ThisClashIsQuiteEasyRight?", 11)); // 3670344486987776
console.log(asiiMathPow("RandomNumber:", 7)); // 62748517
console.log(asiiMathPow("NowIsTest9!YouDidIt!", 14)); // 1638400000000000000
console.log(asiiMathPow("WhyCantJavascriptPass?!", 10)); // 41426511213649
console.log(asiiMathPow("O", 144853)); // 1
