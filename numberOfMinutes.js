/*Find the travel time in minutes that the trip takes given the departure and arrival times.
Entrée
Line 1: A string of the departure time in 24-hour time format of either H:MM or HH:MM
Line 2: A string of the arrival time in 24-hour time format of either H:MM or HH:MM
Sortie
Minutes that the trip will take.
Contraintes
Assume that all times are the same day (ain't nobody like traveling past midnight).
Departure time is always earlier than arrival time.
Exemple
Entrée
8:12
14:32
Sortie
380*/

function numberOfMinutes(depart, arrive) {
  const start = depart.split(":");
  const end = arrive.split(":");
  return (
    (Number(end[0]) - Number(start[0])) * 60 + Number(end[1]) - Number(start[1])
  );
}

console.log(numberOfMinutes("8:12", "14:32")); // 380
console.log(numberOfMinutes("7:30", "17:59")); // 629
console.log(numberOfMinutes("10:43", "14:27")); // 224