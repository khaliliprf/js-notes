var readline = require('readline')

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
})

let lineCnt = 0,
  qCnt = 0,
  numOfQuestions,
  trueAnswers,
  studentAnswers = []

const convertIndexToChar = (index) => {
  switch (index) {
    case 0:
      return 'A'
    case 1:
      return 'B'
    case 2:
      return 'C'
    case 3:
      return 'D'
  }
}
const printScore = (answers) => {
  let trueA = 0
  let falseA = 0
  for (let i = 0; i < numOfQuestions; i++) {
    const sharpIndexes = []
    answers[i].split('').forEach((elem, index) => {
      if (elem === '#') sharpIndexes.push(index)
    })
    if (sharpIndexes.length === 0) {
      continue
    } else if (sharpIndexes.length > 1) {
      falseA++
    } else if (sharpIndexes.length === 1) {
      if (trueAnswers[i] === convertIndexToChar(sharpIndexes[0])) {
        trueA++
      } else {
        falseA++
      }
    }
  }
  studentAnswers = []
  return 3 * trueA - falseA
}

rl.on('line', function (line) {
  if (lineCnt == 0) {
    numOfQuestions = parseInt(line)
    lineCnt++
  } else if (lineCnt == 1) {
    trueAnswers = line.split('')
    lineCnt++
  } else if (lineCnt == 2) {
    numOfStudentAnswers = parseInt(line)
    lineCnt++
  } else if (lineCnt > 2) {
    studentAnswers.push(line)
    qCnt++
    if (qCnt % numOfQuestions === 0) {
      console.log(printScore(studentAnswers))
    }
    lineCnt++
  }
})
