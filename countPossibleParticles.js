/*In this universe, there are many particles. Let us differentiate these particles by their size.
New particles can be obtained when two different size particles collide with each other. The size of this new particle would be the absolute difference of the size of the collided particles.
Given an infinite amount of starting particles, how many different particles are possible?

You are given the sizes of the starting particles. Colliding particles an infinite amount of times, how many different particles are possible?

Examples:
Given the particles {2, 3, 6}, you can obtain the particles abs(2-3) = 1, abs(2-6) = 4 and abs(3-6).
With the new particle 1 you can create also the particle abs(6-1) = 5.
You cannot create any other particle so the possible particles are {1, 2, 3, 4, 5, 6}. There is 6 of them.

Similarly given the elements {2, 6} you can create one more element for a total of 3 elements.
Entrée
Line 1: An integer n: The number of starting particles
Line 2:n integers val, space-separated: The sizes of the starting particles.
Sortie
A single line containing the number of of possible particles.
Contraintes
0<n<10
0<val<=1000
Exemple
Entrée
3
2 3 6
Sortie
6*/

function countPossibleParticles(particles) {
  let particleSet = new Set(particles);
  let createdNew = true;
  while (createdNew) {
    createdNew = false;
    let newSet = [...particles];
    for (let i = 0; i < particles.length - 1; i++) {
      for (let j = 0; j < particles.length; j++) {
        let particle = Math.abs(particles[i] - particles[j]);
        if (particle === 0) continue;
        if (!particleSet.has(particle)) {
          particleSet.add(particle);
          newSet.push(particle);
          createdNew = true;
        }
      }
      particles = newSet;
    }
  }
  return particleSet.size;
}

console.log(countPossibleParticles([2, 3, 6])); // 6
console.log(countPossibleParticles([2, 3, 6, 9, 8, 7, 13])); // 13
