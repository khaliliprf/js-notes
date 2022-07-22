var readline = require('readline')

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
})

var cnt = 0
var linesQuantity

const printGameStatus = ({ a, b, c, d }) => {
  const persSum = Number(a) + Number(c),
    estSum = Number(b) + Number(d)

  if (persSum > estSum) {
    return 'perspolis'
  } else if (persSum < estSum) {
    return 'esteghlal'
  } else if (persSum === estSum) {
    if (c > b) {
      return 'perspolis'
    } else if (c < b) {
      return 'esteghlal'
    } else {
      return 'penalty'
    }
  }
}

rl.on('line', function (line) {
  if (cnt == 0) {
    linesQuantity = parseInt(line)
    cnt++
  } else if (cnt <= linesQuantity) {
    var [a, b, c, d] = line.split(' ')
    console.log(printGameStatus({ a, b, c, d }))
  }
})
