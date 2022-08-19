// There is a total of n trains going from station A to station B say d km distance. Each train has a different
//speed s measured in km/hr and a unique number tun.
// Every train stops at p different stations, at every station between A and B the train has to wait for 30 minutes.
// You have to reach station B as fast as possible for your interview at google, Select your train.

function train(d, n, data) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    let s = data[i].split(" ")[0]; // speed
    let tun = data[i].split(" ")[1]; // unique number
    let p = data[i].split(" ")[2]; // amount of stations
    let time = d / s + p * 0.5;
    console.log(time);
    arr.push([tun, time]);
    arr.sort((a, b) => a[1] - b[1]);
  }
  return arr[0][0];
}

console.log(train(200, 3, ["120 12230 3", "160 23440 2", "180 33250 7"])); // 23440
console.log(train(700, 3, ["1270 12230 10", "1160 23440 25", "1180 33250 5"])); // 33250