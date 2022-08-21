// Le mode de jeu est REVERSE : Vous n'avez pas accès à l'énoncé. Vous devez trouver quoi faire en observant
//  les jeux de tests suivants :

function transform(phrase, method) {
  let result = [];
  let result3 = [];
  for (let i = 0; i < phrase.length; i++) {
    if (method === 1 && phrase[i] !== " ") {
      result.push(phrase[i], " ");
    } else if (method === 2 && phrase[i] !== " ") {
      result.push(phrase[i], " ");
    }
    if ((method === 3 && i !== 0) || (method === 3 && phrase[i - 1] !== " ")) {
      result3.push(phrase[i].toUpperCase());
    } else if (
      (method === 3 && i === 0) ||
      (method === 3 && phrase[i - 1] === " ")
    ) {
      result3.push(phrase[i].toLowerCase());
    }
  }
  result.pop();
  return method === 1
    ? result.join("").toLowerCase()
    : method === 2
    ? result.join("").toUpperCase()
    : result3.join("");
}

console.log(transform("Hello There", 1)); // h e l l o t h e r e
console.log(transform("Hello There", 2)); // H E L L O T H E R E
console.log(transform("Hello There", 3)); // hELLO tHERE
console.log(transform("Lo,.rem #Ip]s[um", 3)); // lO,.rEm#Ip]S[uM
