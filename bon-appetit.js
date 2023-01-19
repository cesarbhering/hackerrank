//https://www.hackerrank.com/challenges/bon-appetit

function bonAppetit(bill, k, b) {
  // Write your code here
  bill.splice(k, 1)
  const fairTotal = bill.reduce((a,b) => a + b)
  fairTotal / 2 === b ? console.log('bon appetit') : console.log(b - (fairTotal / 2))
}

bonAppetit([3, 10, 2, 9,], 1, 12)