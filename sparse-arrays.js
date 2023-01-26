// https://www.hackerrank.com/challenges/sparse-arrays/

function matchingStrings(queries, strings) {
  // Write your code here
  let countMatches = []

  for (let i = 0; i < strings.length; i++) {
    const currString = strings[i];
    let countForThisString = 0
    for (let j = 0; j < queries.length; j++) {
      const currQuery = queries[j];
      if (currQuery === currString){countForThisString+=1}
    }
    countMatches.push(countForThisString)
  }

  return countMatches
}

console.log(matchingStrings(
  ['aba',
    'baba',
    'aba',
    'xzxb',
  ], [
  'aba',
  'xzxb',
  'ab']))