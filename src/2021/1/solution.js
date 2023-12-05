const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, './input.txt')
const lines = fs.readFileSync(filePath, 'utf-8').trim().split('\n')
const measurements = lines.map((line) => Number(line))

const sumOfIncreases = (accumulator, currentValue, currentIndex, array) =>
  currentIndex > 0
    ? currentValue > array[currentIndex - 1]
      ? accumulator + 1
      : accumulator
    : accumulator

const sum = measurements.reduce(sumOfIncreases, 0)
console.log(`Part 1: ${sum}`)

const sumOfSums = measurements
  .map(
    (currentValue, index, array) =>
      currentValue + array[index + 1] + array[index + 2],
  )
  .reduce(sumOfIncreases, 0)

console.log(`Part 2: ${sumOfSums}`)
