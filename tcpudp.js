/*You must output the number of open TCP ports given the results of a port scan.

You are given a string representing the results of a port scan of one or more ports. Each port's result consists of the PortNumber, the status of open (O) or closed (C), and the protocol TCP (T) or UDP (U). For example, 22OT means that TCP port 22 is open.

Each port's result is separated by a comma within the string. For example, 22OT,67CU,80CT.
Entrée
Line 1: A string, scan, representing the port scan result of one or more ports.
Sortie
An integer representing the number of open TCP ports.
Contraintes
scan contains at least one port scan result.
PortNumber is in the range of 1 to 65535 inclusive.
Exemple
Entrée
67OU,80OT,443CT
Sortie
1*/

function tcpudp(string) {
  let array = string.split(","),
    count = 0;
  array.forEach((e) => {
    if (e.includes("OT")) count++;
  });
  return count;
}

console.log(tcpudp("67OU,80OT,443CT")); // 1
console.log(tcpudp("22OT,67CU,80OT")); // 2
console.log(tcpudp("22OT,67OT,80OT")); // 3
console.log(tcpudp("22OT,67CU,80CT")); // 1
