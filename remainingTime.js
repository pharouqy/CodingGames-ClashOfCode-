/*A student has many classes and activities, causing him to have very little free time. He wants to balance playing video games and studying. If he can fit both in his free time, output OK. If he cannot fit it in his free time, he will cut back on his video game time. Output how long he can play video games to fit it in his free time.
Entrée
Line 1: An integer n for the hours of free time he has.
Line 2: An integer v for the hours he wants to spend gaming.
Line 3: An Integer s for the hours he wants to spend studying.
Sortie
Line 1: OK If it can fit in his free time, or how long he can play video games to fit everything in his free time.
Contraintes
0 <= n, v, s <= 24
Exemple
Entrée
24
8
10
Sortie
OK*/

function remainingTime(free, video, study) {
  if (video + study <= free) {
    return "OK";
  } else {
    if (free - study >= 0) {
      return free - study;
    } else {
      return "Il ne peut pas jouer.";
    }
  }
}

console.log(remainingTime(24, 8, 10)); // OK
console.log(remainingTime(75, 80, 10)); // 65
