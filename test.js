// Your job is to write a script for an intercom in a newly built building. Given the user input,
// you should output Open, Wrong Code, or Wrong Flat depending on whether the provided door code and flat number were correct

// For example:
// The intercom serves a N=10 building, and a person wants to get into his flat number 5 knowing
// his code is 1234, so his intercom input S is 5*1234

// The list of codes is:
// 0123 this refers to flat number 1, not number 0!
// 5555
// 3333
// 0000
// 1234
// 6666
// 7777
// 2345
// 6785
// 9876

// From the above we can conclude that 1234 is the valid code for this guy's flat. Please note
// that first code (0123) refers to flat number 1 and not number 0! (which is considered as invalid flat) They're 1-indexed

// For this case, the output should be Open, as the code entered was correct.
// If the code was wrong (wouldn't match the code for that flat number) the output should be Wrong Code
// If the flat number didn't exist in the building (for example flat number 30, if N was 15 flats) the output should be Wrong Flat
// Entrée
// Line 1: A string S consisting of flat number and the door code the user typed into the intercom, asterisk ("*") separated
// Line 2: An integer N for the number of flats in the building
// Next N lines: Valid door codes for flat numbers from 1 to N (thus there's no flat number 0!!),
// containing only numbers but are strings, as they may contain multiple zeroes

function intercom(str, N, arr) {
  const index = str.split("*")[0];
  let result = "";
  let open = false;
  for (let i = 0; i < arr.length; i++) {
    let intercom = `${i + 1}*${arr[i]}`;
    if (intercom === str) {
      result = "Open";
      open = true;
    }
  }
  if (!open) {
    result = "Wrong Code";
  }
  if (index > N || index == 0) {
    result = "Wrong Flat";
  }
  return result;
}

console.log(intercom("0*6666", 5, ["1111", "2222", "3333", "4444", "5555"])); // Wrong Flat
console.log(intercom("1*1111", 5, ["1111", "2222", "3333", "4444", "5555"])); // Open
console.log(intercom("5*5555", 5, ["1111", "2222", "3333", "4444", "5555"])); // Open
