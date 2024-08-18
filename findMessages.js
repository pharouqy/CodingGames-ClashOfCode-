/*Imagine you have a system where each action is represented by a specific power of 2. By providing a bitmask 𝑛, you can determine which actions are enabled and trigger them accordingly. Each bit set to 1 indicates an enabled action.
Here are the actions:

1: Send Message
2: Acknowledge
4: Receive Notification
8: Update Status
Entrée
The input 𝑛 is a non-negative integer representing the bitmask.
Sortie
Print action names corresponding to the enabled bits in 𝑛, one enabled action per line, in the same order as the list of actions in the statement. If no action is enabled, print null
Contraintes
0 ≤ 𝑛 ≤ 15
Exemple
Entrée
5
Sortie
Send Message
Receive Notification*/

function findMessages(number) {
  const messages = {
    1: "Send Message",
    2: "Acknowledge",
    4: "Receive Notification",
    8: "Update Status",
  };
  const keys = Object.keys(messages);
  const array = [];
  if (number <= 0) {
    return null;
  } else {
    for (let i = keys.length - 1; i >= 0; i--) {
      if (number >= keys[i]) {
        array.push(messages[keys[i]]);
        number -= keys[i];
      }
      continue;
    }
  }
  return array;
}

console.log(findMessages(5)); // [ 'Receive Notification', 'Send Message' ]
console.log(findMessages(0)); // null
console.log(findMessages(15)); // ['Update Status', 'Receive Notification', 'Acknowledge', 'Send Message']
console.log(findMessages(6)) // [ 'Receive Notification', 'Acknowledge' ]
