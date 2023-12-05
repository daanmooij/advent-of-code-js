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

console.log(sum)
