/*The among us imposter is trying to go to the mall for some among us plushies but needs to know if he will make it or not.
Entrée
Line 1: An integer f the starting fuel in liters
Line 2: An integer d the distance to travel in meters
Line 3: An integer r the rate at which fuel is burned liters per meters
Sortie
Line 1: An integer a for either the remaining fuel or not enough fuel
Contraintes
Exemple
Entrée
50
25
1
Sortie
25*/

function remainingFuel(fuel, diistance, rate) {
  const remaining = rate * diistance;
  return remaining < fuel || remaining - fuel === 0
    ? fuel - remaining
    : "not enough fuel";
}

console.log(remainingFuel(50, 25, 1)); // 25
console.log(remainingFuel(25, 25, 1)); // 0
console.log(remainingFuel(25, 255, 1)); // not enough fuel
