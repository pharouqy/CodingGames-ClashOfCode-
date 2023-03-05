function pickUpTheUpperCase(string) {
  const array = string.split("");
  let result = "";
  for (let i in array) {
    if (/[A-Z]/.test(array[i])) {
      result += array[i];
    }
  }
  return result;
}

console.log(pickUpTheUpperCase("jqhskjfhDlkdfjldfDFklfjlkdfjD")); // 
console.log(pickUpTheUpperCase("Je marChe SeuL !!!"));
console.log(pickUpTheUpperCase("FAbRiquer une mOntre jolie dans des locaUx d'artisanat avec des murs couleur Kaki!!!"));
console.log(pickUpTheUpperCase("shfkjqhqdfDFdkfjdfdfDfDfDFdFdFDfDffsFQfzFZfZFzf"));
console.log(pickUpTheUpperCase("kjduejzkejkzDFg SDSDSsdZEZEZEze"));
