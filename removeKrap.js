/*You are given a string s consisting of only lowercase letters and spaces. You are then given another string krap also consisting of only lowercase letters and spaces. You are to remove all instances of krap from s, then print s
Entrée
Line 1: A string - s
Line 2: A string - krap
Sortie
Line 1: s after all instances of krap are removed from it
Contraintes
0 < length s < 200
0 < length krap < 50
0 <= Instances of krap in s < 200
Exemple
Entrée
qyrjkrapbnxhfuyjnkrapnfhrjgkkrapdjgkrapjntjgnd
krap
Sortie
qyrjbnxhfuyjnnfhrjgkdjgjntjgnd*/

function removeKrap(s, krap) {
  return s.replace(new RegExp(krap, "g"), "");
}

console.log(removeKrap("qyrjkrapbnxhfuyjnkrapnfhrjgkkrapdjgkrapjntjgnd", "krap")); // qyrjbnxhfuyjnnfhrjgkdjgjntjgnd
console.log(removeKrap("qyrjkrapbnxhfuyjnkrapnfhrjgkkrapdjgkrapjntjgnd", "j")); // qyrkrabnxhfuynkranfhrgkkrapdkgrapkntgrnd