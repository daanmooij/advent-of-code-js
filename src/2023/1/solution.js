const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, './input.txt')
const lines = fs.readFileSync(filePath, 'utf-8').trim().split('\n')

const digits = lines.map((line) =>
  line.split('').filter((char) => /^\d$/.test(char)),
)

const calibrations = digits.map((digits) => {
  const firstDigit = digits.shift()
  return firstDigit + (digits.pop() ?? firstDigit)
})

const sum = calibrations.reduce(
  (sum, calibration) => sum + Number(calibration),
  0,
)

console.log(`Part 1: ${sum}`)

const letterDigits = new Map([
  ['one', 1],
  ['two', 2],
  ['three', 3],
  ['four', 4],
  ['five', 5],
  ['six', 6],
  ['seven', 7],
  ['eight', 8],
  ['nine', 9],
])

const totalSum = lines.reduce((sum, line) => {
  let highestIndex = -1
  let lowestIndex = line.length
  let firstDigit = 0
  let lastDigit = 0

  letterDigits.forEach((digit, word) => {
    const firstWordIndex = line.indexOf(word)
    const lastWordIndex = line.lastIndexOf(word)
    const firstDigitIndex = line.indexOf(digit.toString())
    const lastDigitIndex = line.lastIndexOf(digit.toString())
    const maxIndex = Math.max(lastWordIndex, lastDigitIndex)
    const minIndex = Math.min(
      ...[firstWordIndex, firstDigitIndex, lowestIndex].filter(
        (index) => index > -1,
      ),
    )

    if (highestIndex < maxIndex) {
      highestIndex = maxIndex
      lastDigit = digit
    }

    if (lowestIndex > minIndex) {
      lowestIndex = minIndex
      firstDigit = digit
    }
  })

  const calibration = Number(`${firstDigit}${lastDigit}`)
  return sum + calibration
}, 0)

console.log(`Part 2: ${totalSum}`)
