/*You are given 2 inputs:
- A string, text, of alpha-numeric and/or symbolic characters.
- And an integer, time, representing a duration in seconds.

You must output the CPM of the text, rounded to 1 decimal place (1 d.p).


(P.S. CPM stands for Characters Per Minute.)

You might like to check out this link:
https://chatableapps.com/technology/understanding-cpm-in-typing-a-comprehensive-guide-for-beginners/
Entrée
Line 1: A string, text, of alpha-numeric and/or symbolic characters.
Line 2: An integer, time, representing a duration in seconds.
Sortie
Line 1: The answer, CPM, as a string formatted as "CPM cpm".
Contraintes
0 < (length of text) <= 750
0 < time in seconds <= 250
Exemple
Entrée
The quick brown fox jumps over the lazy dog.
60
Sortie
44.0 cpm*/

function calculate_cpm(text, time) {
    return (text.length / (time / 60)).toFixed(1);
}

console.log(calculate_cpm("The quick brown fox jumps over the lazy dog.", 60)); // 44.0
console.log(calculate_cpm("Imposible isn't algerian anymore !", 120)); // 17.0