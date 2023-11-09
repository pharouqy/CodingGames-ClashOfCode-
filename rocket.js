/*You work in NASA, and must check if the rocket will reach Mars

The Problem:
You must create a program to calculate if rocket will reach Mars

Criterion of a Failing rocket:
- If velocity multiplied by the time is less than distance to Mars
- If fuel multiplied by the fuel consumption is less than distance

Notes:
If there is less time, print 'Failure, Not enough time'
If there is less fuel, print 'Failure, Not enough fuel'
If both only print 'Failure, Not enough time'
If rocket is successful, print 'Welcome to Mars'
time will be in hours
fuel will be in liters
fuel_consumption will be in distance per 1 liter of fuel
distance will be in kilometers
Entrée
time: Integer
fuel: Integer
fuel_consumption: Integer
distance: Integer
Sortie
answer: String
Contraintes
0 < fuel, fuel_consumption, distance, velocity, time < 1001
Exemple
Entrée
1000
10
10
100
100
Sortie
Failure, Not enough time*/

Storyline: function rocket(fuel, fuel_consumption, distance, velocity, time) {
  if (velocity * time > distance && fuel * fuel_consumption > distance) {
    return "Failure, Not enough time";
  } else if (fuel * fuel_consumption < distance) {
    return "Failure, Not enough fuel";
  } else {
    return "Welcome to Mars";
  }
}

console.log(rocket(1000, 10, 10, 100, 100)); // Failure, Not enough time
