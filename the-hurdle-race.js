//https://www.hackerrank.com/challenges/the-hurdle-race/
function hurdleRace(k, height) {
  // Write your code here
  return Math.max(...height) > k ? maxHurdleHeight-k : 0
}
