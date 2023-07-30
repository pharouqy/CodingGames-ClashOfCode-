/*Peter wants to paint and fill two rectangles with the same color on the same wall. He needs to know the filling area in order to buy the necessary paint buckets. Peter does not want to double-paint overlapping regions.
Entrée
One line per rectangle:
Line 1: Four space-separated integers corresponding to x y w h
Line 2: Four space-separated integers corresponding to x y w h

x y are the coordinates of the bottom left corner of the rectangle
w stands for the width
h stands for the height
Sortie
An integer with the filling area
Contraintes
0 <= x, y < 100
0 < w, h < 100
Exemple
Entrée
2 3 4 5
8 1 3 2
Sortie
26*/

function calculateFillingArea(rect1, rect2) {
    const [x1, y1, w1, h1] = rect1;
    const [x2, y2, w2, h2] = rect2;
  
    // Calculer les coordonnées des coins supérieur droit et inférieur gauche des rectangles
    const rect1TopRight = [x1 + w1, y1 + h1];
    const rect2TopRight = [x2 + w2, y2 + h2];
    const rect1BottomLeft = [x1, y1];
    const rect2BottomLeft = [x2, y2];
  
    // Trouver les coordonnées du coin supérieur gauche du rectangle d'intersection
    const xOverlap = Math.max(0, Math.min(rect1TopRight[0], rect2TopRight[0]) - Math.max(rect1BottomLeft[0], rect2BottomLeft[0]));
    const yOverlap = Math.max(0, Math.min(rect1TopRight[1], rect2TopRight[1]) - Math.max(rect1BottomLeft[1], rect2BottomLeft[1]));
  
    // Calculer la zone de remplissage pour les deux rectangles
    const area1 = w1 * h1;
    const area2 = w2 * h2;
  
    // Soustraire la zone d'intersection si elle existe
    const intersectionArea = xOverlap * yOverlap;
    const fillingArea = area1 + area2 - intersectionArea;
  
    return fillingArea;
  }
  
  // Exemple d'utilisation :
  console.log(calculateFillingArea([2, 3, 4, 5], [8, 1, 3, 2])); // 26
  