function countDigit(array) {
  let obj = { 1: "", 2: "", 3: "", 4: "", 5: "", 6: "", 7: "", 8: "", 9: "" };
  for (let i = 0; i < array.length; i++) {
    obj[array[i]] += array[i] ? "*" : "";
  }
  return obj;
}

console.log(countDigit([1, 8])); // {1: "*", 2: "", 3:"", 4:"", 5:"", 6:"", 7:"", 8:"*", 9:""}
console.log(countDigit([1, 8, 8, 8, 1, 5])); // {'1': '**','2': '','3': '','4': '','5': '*','6': '','7': '','8': '***','9': '' }
