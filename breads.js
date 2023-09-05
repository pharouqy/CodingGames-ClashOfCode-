/*Is there enough bread to feed the people for the amount of time?
Entrée
Line 1: An integer b amount of bread
Line 2: An integer p amount of people
Line 3: An integer r rate of bread consumed per hour per person
Line 4: An integer t the proposed time in hours
Sortie
Line 1: A string a for if there is Enough bread, Not enough bread or Just enough bread
Contraintes
Exemple
Entrée
5
1
1
5
Sortie
Just enough bread
Sortie console*/

function breads(bread, people, rate, time) {
  return time * rate * people == bread
    ? "Just enough bread"
    : time * rate * people < bread
    ? "Enough bread"
    : "Not enough bread";
}

console.log(breads(5, 1, 1, 5)); // Just enough bread
console.log(breads(10, 1, 1, 5)); // Enough bread
console.log(breads(10, 1, 1, 11)); // Not enough bread
