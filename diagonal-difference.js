// https://www.hackerrank.com/challenges/diagonal-difference/
function diagonalDifference(arr) {
  // Write your code here
  let rigthToLeft = arr.map((e, i) => {return e[i]}).reduce((acc,curr) => acc+curr, 0)
  let leftToright = arr.map((e, i) => {return e[e.length- 1 -  i]}).reduce((acc,curr) => acc+curr, 0)
  return Math.abs(rigthToLeft - leftToright)
}

console.log(diagonalDifference([ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ]))