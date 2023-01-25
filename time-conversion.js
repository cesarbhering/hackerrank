//https://www.hackerrank.com/challenges/time-conversion

function timeConversion(s) {
  // Write your code here
  if (s.slice(-2) === 'AM') {
    return s.slice(0, 2) === '12' ? '00' + s.slice(2, -2) : s.slice(0, -2)
  }
  const hours = parseInt(s.substring(0, 2)) + 12
  return hours === 24 ? '12' + s.slice(2, -2) : hours + s.slice(2, -2)
}

console.log(timeConversion('12:45:54PM'))