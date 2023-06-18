/*You are given a list of n students' names that are in the current classroom
and s the list of all the students that belong to that classroom and are expected to be present.

You need to output the students who are absent, which are not in the classroom. If no one is absent output none.
Entrée
Line 1: n a list of students that are in the current classroom separated by a space.
Line 2: s the list of all the students that belong to that classroom separated by a space.
Sortie
Print 1 Line denoting the students who are not in the classroom separated by space
or
none if all students are in the classroom.
Contraintes
1 <= length n <= length s <= 256

The names in n will always be in s. In other words, n ⊆ s.

All names in n are distinct

All names in s are distinct.
Exemple
Entrée
john mike jotaro
john dio mike jotaro wang
Sortie
dio wang*/

function presentOnClassrooms(arrayList, arrayExist) {
  let result = [];
  for (let i = 0; i < arrayExist.length; i++) {
    if (!arrayList.includes(arrayExist[i])) {
      result.push(arrayExist[i]);
    }
  }
  return arrayExist.every((x, i) => x === result[i]) ? "none" : result;
}

console.log(
  presentOnClassrooms(
    ["john", "mike", "jotaro"],
    ["john", "dio", "mike", "jotaro", "wang", "farouk"]
  )
); // [ 'dio', 'wang', 'farouk' ]
console.log(
  presentOnClassrooms(
    ["john", "mike", "jotaro"],
    ["farouk", "hamza", "nicolas"]
  )
); // none
