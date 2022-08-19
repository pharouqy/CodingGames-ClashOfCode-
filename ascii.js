// The problem is to find the sum of the ASCII values of lowercase letters.

function ascii(s) {
  let m = 0;
  const w = s.replace(/[A-Z]/g, "").split("");
  for (let i = 0; i < w.length; i++) {
    m += w[i].charCodeAt();
  }
  return m;
}

console.log(ascii("asfsdfsdffs")); // 1165
console.log(ascii("aZAzbzaysnoeGIYWhuefUOui")); // 1740
console.log(ascii("aZAZbzaysnoeGIYWhuefUOui")); // 1618
