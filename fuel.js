// You need to calculate if it is possible to fuel up a spaceship within the number of seconds allowed(t),
//  given the capacity of the tank (c) in litres, and the number of litres of fuel that can be pumped into its tank per second (r).
// The tank starts empty.
// The maximum amount of litres per second (r) is constantly pumped into the tank until it is full.
// Entrée
// Line 1: Three space seperated integers t, c, and r.
// Sortie
// Line 1: An string "yes" or "no". "yes" if it is possible to fill up the spaceship in the time allowed,
//  "no" if it is not possible.

function fuel(t, c, r) {
  // r = f / t => f = r * t
  return r * t >= c ? "yes" : "no";
}

console.log(fuel(5, 3, 1)); // yes
