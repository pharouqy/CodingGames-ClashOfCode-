/*Your task is to bake a cake. The cake needs specific amounts of three ingredients: flour, sugar, and eggs. Given the available quantities of these ingredients, calculate the maximum number of cakes you can bake.
Entrée
Line 1: Three integers separated by space, FlourTotal , SugarTotal , EggsTotal representing the quantity of flour, sugar, and eggs in your kitchen.
Line 2: Three integers separated by space, FlourRequired , SugarRequired , EggsRequired representing the required amount of flour, sugar, and eggs to bake one cake.
Sortie
One integer the number of cakes you can bake with the given ingredients.
Contraintes
1 ≤ FlourTotal, SugarTotal, EggsTotal, FlourRequired, SugarRequired, EggsRequired ≤ 10^6
Exemple
Entrée
30 40 50
3 4 5
Sortie
10*/

function numbersOfCakes(flour, sugar, eggs, reqFlour, reqSugar, reqEggs) {
  const numberOfFlour = Math.floor(flour / reqFlour);
  const numberOfSugar = Math.floor(sugar / reqSugar);
  const numberOfEggs = Math.floor(eggs / reqEggs);

  if ((numberOfFlour === numberOfSugar) === numberOfEggs) {
    return numberOfFlour;
  } else {
    if (numberOfFlour <= numberOfSugar && numberOfFlour <= numberOfEggs) {
      return numberOfFlour;
    } else if (
      numberOfSugar <= numberOfFlour &&
      numberOfSugar <= numberOfEggs
    ) {
      return numberOfSugar;
    } else {
      return numberOfEggs;
    }
  }
}

console.log(numbersOfCakes(30, 40, 50, 3, 4, 5)); // 10
console.log(numbersOfCakes(2556, 4587, 4875, 3, 4, 5)); // 852
console.log(numbersOfCakes(7589, 4856, 1245, 3, 4, 5)); // 249
