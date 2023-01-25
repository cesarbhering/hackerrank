// https://www.hackerrank.com/challenges/mini-max-sum/

function miniMaxSum(arr) {
  // Write your code here
  arr.sort()
  console.log(arr.slice(0,-1).reduce((a, b) => a + b, 0), arr.slice(1).reduce((a, b) => a + b, 0))
}

miniMaxSum([1, 2, 3, 4, 5])