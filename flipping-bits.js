// https://www.hackerrank.com/challenges/flipping-bits/

function flippingBits(n) {
  //return 4294967295 - n
  // Write your code here

  let nInBinary = (n).toString(2)
  let fullBit = '00000000000000000000000000000000' // lembrar padStart
  fullBit = fullBit.split('')
  fullBit.splice(fullBit.length-nInBinary.length, nInBinary.length, nInBinary)
  fullBit = fullBit.join('')
  fullBit = fullBit.split('')
  fullBit.forEach((n, i) => n === '0' ? fullBit[i] = '1' : fullBit[i] = '0')
  fullBit = fullBit.join('')
  return parseInt(fullBit, 2)
}

console.log(flippingBits(2147483647))
