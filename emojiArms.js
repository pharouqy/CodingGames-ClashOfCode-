/*Output a bracket emoji with both arms.
You will be given its face and its left arm. A simple bracket emoji will look like this:
<-('/\')->
The right arm is a mirror image of the left arm:
- reverse the order of the characters in the left arm
- replace the following characters with the mirrored version:
'<' and '>', '/' and '\', '[' and ']', '{' and '}', '(' and ')'

Example:
If face is (~n~) and left arm is >-, output
>-(~n~)-<
Entrée
Line 1: A string face for the face of the emoji
Line 2: A string left arm for the left arm
Sortie
The bracket emoji
Contraintes
face and arm contain only ASCII characters.
Exemple
Entrée
(~n~)
|-
Sortie
|-(~n~)-|*/

function emojiArms(emoji, arm) {
  return (
    arm +
    emoji +
    arm
      .split("")
      .reverse()
      .map((char) => {
        switch (char) {
          case "<":
            return ">";
          case ">":
            return "<";
          case "/":
            return "\\";
          case "\\":
            return "/";
          case "[":
            return "]";
          case "]":
            return "[";
          case "{":
            return "}";
          case "}":
            return "{";
          case "(":
            return ")";
          case ")":
            return "(";
          default:
            return char;
        }
      })
      .join("")
  );
}

console.log(emojiArms("(~n~)", "|-)")); // |-(~n~)-|
console.log(emojiArms("(-.-)", "<-")); // <-(-.-)->
console.log(emojiArms("(-_-)", "(-_-)")); // (-_-)(-_-)
