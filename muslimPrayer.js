/*It is obligatory for the Muslims to make their rows straight and compact and to close the gaps between them. That is done by standing shoulder-to-shoulder and foot-to-foot.
The distance between rows in a mosque can vary depending on the size of the mosque and the preferences of the congregation. However, typically the distance between rows is around 60-80 centimeters (24-32 inches) to allow enough space for people to comfortably kneel and prostrate during prayer.
You are given the length l and the distance d between the rows of a mosque, your task is to calculate the number of rows in this mosque.
Entrée
Line 1 l: the length of a mosque is an integer in meters
Line 2 d: the distance between the rows of a mosque is an integer in centimeters
Sortie
An integer represent the number of rows in the mosque
Contraintes
60<=d<=80
Exemple
Entrée
50
70
Sortie
71*/

function muslimPrayer(length, rows) {
  return Math.floor((length * 100) / rows);
}

console.log(muslimPrayer(50, 70)); // 71
console.log(muslimPrayer(50, 60)); // 70
console.log(muslimPrayer(50, 80)); // 72
console.log(muslimPrayer(50, 90)); // 73