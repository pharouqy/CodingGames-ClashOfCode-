/*You are in a room with happy people and sad people. You wish to measure how happy the room is.
To do this, you decide to add one point for each happy face and remove one for each sad face.

The possible emoticons are the following.
Happy:
=)
^_^

Sad:
:(
>_<

The final score may be a negative number.
Entrée
Line 1: A string of emoticons, each separated by exactly one space.
Sortie
A single line containing the total happiness score.
Contraintes
There may be any number of faces from 1 to 9 (inclusive).
Exemple
Entrée
=) ^_^
Sortie
2*/

function emoticon(faces) {
  const emoticonArray = faces.split(" ");
  let happinessScore = 0;
  emoticonArray.forEach((emoticon) => {
    if (emoticon === "=)" || emoticon === "^_^") {
      happinessScore += 1;
    } else if (emoticon === ":(" || emoticon === ">_<") {
      happinessScore -= 1;
    }
  });
  return happinessScore;
}

console.log(emoticon("=) ^_^")); // 2
console.log(emoticon("=) :(")); // 0
console.log(emoticon("=) ^_^ :(")); // 1
