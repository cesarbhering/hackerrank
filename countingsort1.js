// https://www.hackerrank.com/challenges/countingsort1/

function countingSort(arr) {
  // Write your code here
  let arrayOfZeros = Array.from({length: 100}, (e) => 0)
  arr.forEach((number)=> arrayOfZeros[number] +=1)
  return arrayOfZeros
}

countingSort([0,10,20])
