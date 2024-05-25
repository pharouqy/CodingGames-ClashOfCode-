function verifyTwice(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  }
  const double = string1.toLowerCase() + string1.toLowerCase();
  return double.includes(string2.toLowerCase());
}

console.log(verifyTwice("ABcD", "CdAb")); // true
console.log(verifyTwice("WXyXwxy", "XWYWxY")); // false
