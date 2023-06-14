/*Hamza want to read message from his boyfriend, but there are many numbers
Help Hamza to read his name!
Entrée
given string s
Sortie
print name without numbers
Contraintes
1 <= length of s <= 100
Exemple
Entrée
H2a3m12z13a4i O45t67a78l8a
Sortie
Hamzai Otala*/

function extractName(string) {
    return string.match(/[A-Za-z ]/g).join("");
}

console.log(extractName("H2a3m12z13a4i O45t67a78l8a")) // Hamzai Otala
console.log(extractName("F4575a5r4587o6325u54k Y883201o4763u45n45si")) // Farouk Younsi