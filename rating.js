/*On an e-commerce website, we need to generate a star rating system based on all ratings a product has received, rounded down.
Entrée
Line 1: A set of received notes separated by a comma.
Sortie
Line 1: A line comprising a set of characters * representing the average score of all received scores.
Contraintes
Exemple
Entrée
1,1,1
Sortie
**/

function rating(ratings) {
  const rating = ratings.split(",");
  let sum = 0;
  for (let i = 0; i < rating.length; i++) {
    sum += parseInt(rating[i]);
  }
  const average = Math.floor(sum / rating.length);
  const result = [];
  for (let i = 0; i < average; i++) {
    result.push("*");
  }
  return result.join("");
}

console.log(rating("1,1,1")); // *
console.log(rating("1,2,3,4,5")); // *****
console.log(rating("0,0,0,0,5")); // *
console.log(rating("1,2,3,4,5,6,7,8,9,10")); // *****
console.log(rating("0,0,0,0,0,0,0,0,0,0")); // ""
