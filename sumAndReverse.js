/*Le mode de jeu est REVERSE : Vous n'avez pas accès à l'énoncé. Vous devez trouver quoi faire en observant les jeux de tests suivants :
01 Test 1
Entrée
Sortie attendue
12adc34s54ki
19ikscda
02 Test 2
Entrée
Sortie attendue
ds394sk30s99
37skssd
03 Test 3
Entrée
Sortie attendue
d3495ks39528394jsJKLJLK3849KJS
88SJKKLJLKJsjskd
04 Test 4
Entrée
Sortie attendue
d30dk3gwuq2348cv34
30vcquwgkdd
05 Test 5
Entrée
Sortie attendue
334s3s
13ss
06 Test 6
Entrée
Sortie attendue
38493jdsfksd34037zjdlkzsw373885qqwpljsdkljhasquwieueiqueqio23482937wo
116owoiqeuqieueiwuqsahjlkdsjlpwqqwszkldjzdskfsdj
07 Test 7
Entrée
Sortie attendue
fewpoi338xzvnsd
14dsnvzxiopwef*/

function sumAndReverse(string) {
  const numbers = string.match(/[0-9]/g);
  const result = numbers.reduce((accu, curr) => {
    return accu + parseInt(curr);
  }, 0);
  const letters = string.match(/[a-zA-Z]/g);
  const word = letters.reverse().join("");
  return result + word;
}

console.log(sumAndReverse("12adc34s54ki")); // 19ikscda
console.log(sumAndReverse("ds394sk30s99")); // 37skssd
console.log(sumAndReverse("d3495ks39528394jsJKLJLK3849KJS")); // 88SJKKLJLKJsjskd
console.log(
  sumAndReverse(
    "38493jdsfksd34037zjdlkzsw373885qqwpljsdkljhasquwieueiqueqio23482937wo"
  )
); // 116owoiqeuqieueiwuqsahjlkdsjlpwqqwszkldjzdskfsdj
console.log(sumAndReverse("334s3s")); // 13ss
