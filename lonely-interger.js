// https://www.hackerrank.com/challenges/lonely-integer/

function lonelyinteger(a) {
  // Write your code here
  
  for (let i = 0; i < a.length; i++) {
    counter = 0
    const elementI = array[i];
    for (let j = 0; j < a.length; j++) {
      const elementJ = array[j];
      elementI === elementJ ? counter +=1 : null
    }
    if (counter === 1) {
      return elementI
    }
  }
}