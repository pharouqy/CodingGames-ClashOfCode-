/*Declan: Who the hell are you?

Walt: You know. You all know exactly who I am. Say my name.

Declan: What? I don't have a damn clue who the hell you are.
Walt: Yeah, you do. I'm the cook. I'm the man who killed Gus Fring.

Declan: Bullshit. Cartel got Fring.

Walt: Are you sure? That's right. Now. Say my name.

Declan: You're ............ ?
Entrée
Heisenberg
Sortie
4
Contraintes
Tip: output the count of letters 'e' case independently plus one
Exemple
Entrée
Heisenberg
Sortie
4*/

function countOfE(string) {
  const name = string.split("");
  let count = 1;
  name.forEach((letter) => {
    if (letter === "e" || letter === "E") {
      count++;
    }
  });
  return count;
}

console.log(countOfE("Heisenberg")); // 4
console.log(countOfE('Cartel')); // 2
console.log(countOfE('farouk younsi')); // 1
