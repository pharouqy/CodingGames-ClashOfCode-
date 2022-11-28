let s, w, z;
s = ["Ga", "Bu", "Zo", "Meu"];
z = 0;
w = 0;

for (let i in s) {
  console.log(s[i]);
  if (s[i] === "Ga" && w === 0) {
    w = 1;
  } else {
    if (s[i] === "Bu" && w === 1) {
      w = 2;
    } else {
      if (s[i] === "Zo" && w === 2) {
        w = 3;
      } else {
        if (s[i] === "Meu" && w === 3) {
          z += 1;
          w = 0;
        }
      }
    }
  }
}

console.log(z);
