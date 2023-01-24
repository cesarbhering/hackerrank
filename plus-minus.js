// https://www.hackerrank.com/challenges/plus-minus/

function plusMinus(arr) {
  // Write your code here
  const divisor = arr.length
  console.log((arr.reduce((acc, curr) => curr > 0 ? acc + 1 : acc, 0) / divisor).toFixed(6))
  console.log((arr.reduce((acc, curr) => curr < 0 ? acc + 1 : acc, 0) / divisor).toFixed(6))
  console.log((arr.reduce((acc, curr) => curr === 0 ? acc + 1 : acc, 0) / divisor).toFixed(6))

}

plusMinus([-4, 3, -9, 0, 4, 1])