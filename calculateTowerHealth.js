/*It is the end of a Clash Royal match, and to win, you have to summon a fireball and hit the enemy tower so it gets destroyed! A level one fireball deals 200 damage. Each level higher adds 20 to the damage. Figure out if you can win just in time!

P.S.: if the enemy tower has 0 health, you win!
Entrée
Line 1: An integer health: your enemy's tower's health
Line 2: An integer level: your rocket level
Sortie
Line 1: a string of hehehehaw if you win, or rawr if you lose.
followed by a space, and then: an integer for the enemy tower's health left
Contraintes
1 <= health <= 1000
1 <= level <= 30
Exemple
Entrée
250
12
Sortie
hehehehaw -170*/

function calculateTowerHealth(health, level) {
    const damage = 200 + (level - 1) * 20;
    const remainingHealth = health - damage;
  
    if (remainingHealth <= 0) {
      return 'hehehehaw ' + remainingHealth;
    } else {
      return 'rawr ' + remainingHealth;
    }
  }
  
  console.log(calculateTowerHealth(250, 12)); // Output: hehehehaw -170