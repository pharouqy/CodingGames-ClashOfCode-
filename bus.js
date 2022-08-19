// Sunrise. You drive your bus to the first bus stop without any passenger.
// At each bus stop, some people get in the bus, and other people get off the bus.
// You have to count how many people are in the bus at the end, including yourself.

function bus(n, arr) {
  let numbers = 0;
  for (let i = 0; i < n; i++) {
    const stops = arr[i].split(" ");
    numbers += parseInt(stops[0]) - parseInt(stops[1]);
  }
  return numbers + 1; // +1 for yourself
}

console.log(bus(3, ["2 0", "4 1", "1 3"])); // 4
console.log(bus(3, ["25 10", "14 10", "20 5"])); // 35
console.log(bus(3, ["1 0", "1 1", "1 2"])); // 1
