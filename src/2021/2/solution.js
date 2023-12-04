const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, './input.txt')
let input = fs.readFileSync(filePath, 'utf-8')
input = input
  .split('\n')
  .map((n) => n.split(' ').map((n) => (isNaN(n) ? n : +n)))

const horizontalPosition = input
  .filter((n) => n.includes('forward'))
  .reduce(function (previous, current) {
    return previous + current.pop()
  }, 0)

const depth = input
  .filter((n) => !n.includes('forward'))
  .reduce(function (previous, current) {
    return previous + (current.includes('up') ? current.pop() : -current.pop())
  }, 0)

console.log('Answer part 1: ' + horizontalPosition * depth)
