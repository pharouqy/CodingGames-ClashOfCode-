/*You are the first to build a high-end Quantum Computer!
Quantum Computers are the next big step in the evolution of computers and they use qubits to store information.
Your task: Print out the minimum number of qubits required to store the file sizes received as input.

Hints:
- n qubits can store as much information as 2^n bits.(Why? While classical bit can be either 0 OR 1, a quantum bit, or qubit is a superposition of 0 AND 1)
- Qubits may have unused capacity (you'll need to find the minimum qubit size that fulfills this: total capacity of qubits >= the information we need to store.)
- 1 byte= 8 bits, 1 KB = 1024 byte, 1 MB = 1024 KB, 1 GB = 1024 MB, 1 TB = 1024 GB

Example:
Input : 3 byte (3 byte = 24 bits )
Output : 5 (5 qubit = 2^5bits = 32 bits. And 32bits >= 24 bits .
4 qubit would be too few since 2^4=16 and 16 is less than 24.
Entrée
Line 1: An integer N for the value you need to convert to qubits.
Line 2: A string S for the name of measurement unit you need to convert to qubits. byte, KB, MB, GB,TB
Sortie
Line 1 : An integer Q for the MINIMUM REQUIRED qubits you need to store the amount of information defined in the input.
Contraintes
0 ≤ N ≤ 1024
S can only be one of the following: byte, KB, MB, GB or TB
Exemple
Entrée
1
byte
Sortie
3*/

function getMinimumQubits(N, S) {
  let bits;
  switch (S) {
    case "byte":
      bits = N * 8;
      break;
    case "KB":
      bits = N * 8 * 1024;
      break;
    case "MB":
      bits = N * 8 * 1024 * 1024;
      break;
    case "GB":
      bits = N * 8 * 1024 * 1024 * 1024;
      break;
    case "TB":
      bits = N * 8 * 1024 * 1024 * 1024 * 1024;
      break;
    default:
      throw new Error("Invalid measurement unit.");
  }

  let qubits = 0;
  while (Math.pow(2, qubits) < bits) {
    qubits++;
  }

  return qubits;
}

console.log(getMinimumQubits(1, "byte")); // 3
console.log(getMinimumQubits(1240, "TB")); // 54
