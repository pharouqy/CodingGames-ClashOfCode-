/*Le mode de jeu est REVERSE : Vous n'avez pas accès à l'énoncé. Vous devez trouver quoi faire en observant les jeux de tests suivants :
01 Test 1
Entrée
Sortie attendue
5 6
#####
#S#E#
#_#_#
#_#_#
#___#
#####
# # # # #
 # S # E #
# _ # _ #
 # _ # _ #
# _ _ _ #
 # # # # #
02 Test 2
Entrée
Sortie attendue
8 8
#E_____#
##_###_#
##_____#
#_#_####
##_____#
####_#_#
#S_____#
########
# E _ _ _ _ _ #
 # # _ # # # _ #
# # _ _ _ _ _ #
 # _ # _ # # # #
# # _ _ _ _ _ #
 # # # # _ # _ #
# S _ _ _ _ _ #
 # # # # # # # #
03 Test 3
Entrée
Sortie attendue
15 12
_##_#####_###_#
#__######_##_#_
##S#_____#_#_#_
###_####__#_#_#
###_#####_#___#
#__#####_#_#_##
#_######_#_#_##
________#_#__##
_###_####_#_#_#
#___#####__#_#_
######E__###_#_
___#####_####_#
_ # # _ # # # # # _ # # # _ #
 # _ _ # # # # # # _ # # _ # _
# # S # _ _ _ _ _ # _ # _ # _
 # # # _ # # # # _ _ # _ # _ #
# # # _ # # # # # _ # _ _ _ #
 # _ _ # # # # # _ # _ # _ # #
# _ # # # # # # _ # _ # _ # #
 _ _ _ _ _ _ _ _ # _ # _ _ # #
_ # # # _ # # # # _ # _ # _ #
 # _ _ _ # # # # # _ _ # _ # _
# # # # # # E _ _ # # # _ # _
 _ _ _ # # # # # _ # # # # _ #
04 Test 4
Entrée
Sortie attendue
21 21
#####################
#####_#________######
#####_#_#######_#####
####_#_#______#_#####
####_#_#_#####_#_####
###_#_#_#____#_#_####
###_#_##__###_#_#_###
##_#_#_##___#_#_#_###
##_#_#_#__##_#_#_#_##
#_#_#_#_##_#_#_#_#_##
#S#_#_#_#_E__##_#_#_#
#_#_#_#_#__#_#_#_#_##
##_#_#_#_###_#_#_#_##
##_#_#_#____#_#_#_###
###_#_#_#######_#_###
###_#_#_______#__####
####___#######_#_####
####_#________#_#####
#####_#####_###_#####
#####___#______######
#####################
# # # # # # # # # # # # # # # # # # # # #
 # # # # # _ # _ _ _ _ _ _ _ _ # # # # # #
# # # # # _ # _ # # # # # # # _ # # # # #
 # # # # _ # _ # _ _ _ _ _ _ # _ # # # # #
# # # # _ # _ # _ # # # # # _ # _ # # # #
 # # # _ # _ # _ # _ _ _ _ # _ # _ # # # #
# # # _ # _ # # _ _ # # # _ # _ # _ # # #
 # # _ # _ # _ # # _ _ _ # _ # _ # _ # # #
# # _ # _ # _ # _ _ # # _ # _ # _ # _ # #
 # _ # _ # _ # _ # # _ # _ # _ # _ # _ # #
# S # _ # _ # _ # _ E _ _ # # _ # _ # _ #
 # _ # _ # _ # _ # _ _ # _ # _ # _ # _ # #
# # _ # _ # _ # _ # # # _ # _ # _ # _ # #
 # # _ # _ # _ # _ _ _ _ # _ # _ # _ # # #
# # # _ # _ # _ # # # # # # # _ # _ # # #
 # # # _ # _ # _ _ _ _ _ _ _ # _ _ # # # #
# # # # _ _ _ # # # # # # # _ # _ # # # #
 # # # # _ # _ _ _ _ _ _ _ _ # _ # # # # #
# # # # # _ # # # # # _ # # # _ # # # # #
 # # # # # _ _ _ # _ _ _ _ _ _ # # # # # #
# # # # # # # # # # # # # # # # # # # # # */

function espaceGraphic(string) {
  const array = string.split(" ");
  for (let i = 0; i < array.length; i++) {
    const row = array[i];
    const result = row.split("").join(" ");
    if (i % 2 !== 0) {
      console.log(" " + result);
    } else {
      console.log(result);
    }
  }
  return null;
}

console.log(espaceGraphic("##### #S#E# #_#_# #_#_# #___# #####"));
console.log(
  espaceGraphic(
    "#E_____# ##_###_# ##_____# #_#_#### ##_____# ####_#_# #S_____# ########"
  )
);
console.log(
  espaceGraphic(
    "##################### #####_#________###### #####_#_#######_##### ####_#_#______#_##### ####_#_#_#####_#_#### ###_#_#_#____#_#_#### ###_#_##__###_#_#_### ##_#_#_##___#_#_#_### ##_#_#_#__##_#_#_#_## #_#_#_#_##_#_#_#_#_## #S#_#_#_#_E__##_#_#_# #_#_#_#_#__#_#_#_#_## ##_#_#_#_###_#_#_#_## ##_#_#_#____#_#_#_### ###_#_#_#######_#_### ###_#_#_______#__#### ####___#######_#_#### ####_#________#_##### #####_#####_###_##### #####___#______###### #####################"
  )
);
