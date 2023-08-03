/*The impostor wants to kill all the crewmates from his ship, but has a cooldown between each kill. Print if he can kill all the crewmates within the given time. If he doesn't manage to kill them all print the amount of time he needed, or the time he spared killing them sooner. The impostor starts with the cooldown.
Entrée
Line 1: An integer crewmate with the amount of crewmates.

Line 2: An integer time with the amount of time he has.

Line 3: An integer cooldown with the cooldown between each kill.
Sortie
Line 1: A string saying if the impostor managed to kill all the crewmates.

Line 2: A integer with the time he needed to kill all the crewmates or the time he spared.
Contraintes
Exemple
Entrée
20
200
10
Sortie
True
0*/

function canKillAllCrewmates(crewmate, time, cooldown) {
  const canKill = crewmate * cooldown <= time ? "True" : "False";
  const countDown = Math.abs(time - crewmate * cooldown);
  return [canKill, countDown];
}

console.log(canKillAllCrewmates(20, 200, 10)); // [ 'True', 0 ]
console.log(canKillAllCrewmates(50, 500, 500)); // [ 'False', 24500 ]
console.log(canKillAllCrewmates(50, 500, 1)); // [ 'True', 450 ]
