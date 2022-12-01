// Find the product of the sum of string of numbers separated with space
//For exemple (1*(2+5)*(3+3+6+5)*(9+9+5+6+4+5)) = 4522

function productOfSum(string) {
  const arr = string.split(" ");
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i].split("").reduce((a, b) => parseInt(a) + parseInt(b), 0);
  }
  return product;
}

console.log(productOfSum("1 25 3365 995645")); //4522
console.log(productOfSum("1545 2455 3545365 995645455")); //386880
console.log(productOfSum("545 454 65 6565 254545 3365 9945 455 645")); //106135029000
console.log(productOfSum("1 25 4545 3365 995 645")); //738990
console.log(productOfSum("1 25 33 65 9 95 645")); //873180
console.log(productOfSum("1 25 3 365 995 645")); //101430
