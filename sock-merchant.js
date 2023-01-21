//https://www.hackerrank.com/challenges/sock-merchant

function sockMerchant(n, ar) {
  // Write your code here
  let saparatedSocks = {}
  let pairCount = 0
  ar.forEach(sock => {
    saparatedSocks.hasOwnProperty(sock) ? saparatedSocks[sock] +=1 : saparatedSocks[sock] = 1 
  });
  Object.values(saparatedSocks).forEach((colorPair) => {
    colorPair % 2 === 0 ? pairCount += colorPair / 2 : pairCount += (colorPair-1) / 2  
  })
  return pairCount
}

sockMerchant(10, [10, 20, 20, 10, 10, 30, 50, 10, 20])