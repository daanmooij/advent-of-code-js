const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, './input.txt')
const input = fs.readFileSync(filePath, 'utf-8')

const measurements = input.split('\n').map((n) => +n)

const mapper = (element, index, array) =>
  element + array[index + 1] + array[index + 2]
const flatMapper = (n) => (n === undefined ? [] : n)
const reducer = (previous, current, index, array) =>
  previous + (index > 0 && current > array[index - 1])

let increases = measurements.reduce(reducer, 0)
console.log('Answer part 1: ' + increases)

increases = measurements.map(mapper).flatMap(flatMapper).reduce(reducer, 0)
console.log('Answer part 2: ' + increases)
