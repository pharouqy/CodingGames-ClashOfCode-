/*You are given a patient. Every patient has a unique amount of teeth. Each tooth is either healthy 1, rotten 0 or pulled out -. Pull out any rotten teeth you find.
Entrée
Line 1: Integer N for the amount of rows of teeth in a mouth
Next N lines: Rows of teeth
Sortie
Output the entire mouth of the patient after you have pulled out all the rotten teeth.
Contraintes
2 ≤ N ≤ 10
Exemple
Entrée
2
----------1---------
----------0---------
Sortie
----------1---------
--------------------
*/

function dentist(Teeths) {
  for (let i = 0; i < Teeths.length; i++) {
    const ROW = Teeths[i];
    const array = ROW.split("");
    for (let j = 0; j < array.length; j++) {
      if (array[j] === "0") {
        array.splice(j, 1, "-");
      }
    }
    console.log(array.join(""));
  }
}

dentist(["----------1---------", "----------0---------"]);
