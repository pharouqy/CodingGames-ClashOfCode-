/*The formatting of QrCode is broken. They are sent to you in the form of a table. Repair the format and display of the QrCode.
The Qrcode are all a size of 16x16. The representation of 1 are # and 0 are spaces.
Entrée
16 lines : A string representing the QrCode line
Sortie
16 lines : A string with good format of QrCode
Contraintes
Length of line = 16
line only contains 0 and 1 characters.
Exemple
Entrée
1111111111111111
1000011011100001
1011011101101101
1011011101101101
1000010001100001
1111111110111111
1001010001011001
1011011110101111
1010011000010001
1110111110101001
1111111100111001
1000011011001011
1011010100011001
1011010001000101
1000011111100111
1111111111111111
Sortie
################
#    ## ###    #
# ## ### ## ## #
# ## ### ## ## #
#    #   ##    #
######### ######
#  # #   # ##  #
# ## #### # ####
# #  ##    #   #
### ##### # #  #
########  ###  #
#    ## ##  # ##
# ## # #   ##  #
# ## #   #   # #
#    ######  ###
################*/

function formatQrCode(input) {
    const lines = input.split('\n');
    const formattedLines = [];
    for (let line of lines) {
        let formattedLine = '';
        for (let char of line) {
            formattedLine += char === '1' ? '#' : ' ';
        }
        formattedLines.push(formattedLine);
    }
    return formattedLines.join('\n');
}

const input = `
1111111111111111
1000011011100001
1011011101101101
1011011101101101
1000010001100001
1111111110111111
1001010001011001
1011011110101111
1010011000010001
1110111110101001
1111111100111001
1000011011001011
1011010100011001
1011010001000101
1000011111100111
1111111111111111
`;

const formattedOutput = formatQrCode(input.trim());
console.log(formattedOutput);