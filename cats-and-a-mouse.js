//,https://www.hackerrank.com/challenges/cats-and-a-mouse/

function catAndMouse(x,y,z) {
  const distA = Math.abs(z - x)
  const distB = Math.abs(z -y)
  if (distA === distB) return console.log('Mouse C')
  return distA < distB ?  console.log('Cat A') : console.log('Cat B')
}
