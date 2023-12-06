/*There are 300 players in a football center. These players are divided into a total of 25 teams of 12 players.
The level of the teams is ranked in descending order with the letters going from B to Z.

Each player receives a badge on which is written the letter of his team in capital letters and his rank in this team.
You must give the ranking of a given player out of the 300 players in the center using his badge.

Note: If the team letter is not between B and Z, output COACH or if his rank in his team is higher than 12, output SUBSTITUTE.

Nb: You'll never have a COACH and a SUBSTITUTE at the same time.

Examples:
The player with the B1 badge is ranked 1st, and the player with the Z12 badge is 300th.

Other examples:
C1 is 13th and M7 is 139th
Entrée
Line 1: A string badge for the letter of the team followed by the rank in the team
Sortie
The rank of the player in the football center
Contraintes
2≤length(badge)≤3
Exemple
Entrée
B1
Sortie
1*/

function playerRank(badge) {
    const teamLetter = badge[0];
    const rankInTeam = parseInt(badge.slice(1));

    if ('B' <= teamLetter && teamLetter <= 'Z') {
        const teamRank = teamLetter.charCodeAt(0) - 'B'.charCodeAt(0) + 1;

        if (1 <= rankInTeam && rankInTeam <= 12) {
            const playerRankInCenter = (teamRank - 1) * 12 + rankInTeam;
            return playerRankInCenter;
        } else {
            return "SUBSTITUTE";
        }
    } else {
        return "COACH";
    }
}

console.log(playerRank("B1")); // 1
console.log(playerRank("Z12")); // 300
console.log(playerRank("C1")); // 13
console.log(playerRank("M7")); // 139
console.log(playerRank("A1")); // COACH