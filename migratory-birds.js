// https://www.hackerrank.com/challenges/migratory-birds/

function migratoryBirds(arr) {
  // Write your code here
  let birdCount = {}
  arr.sort()
  arr.forEach((bird) => {
   birdCount.hasOwnProperty(bird) ? birdCount[bird] +=1 : birdCount[bird] = 1
  })

  const values = Object.values(birdCount)

  const indexMax = values.indexOf(Math.max(...values))

  return Object.keys(birdCount)[indexMax]
}

migratoryBirds([1, 4, 4, 4, 5, 3])