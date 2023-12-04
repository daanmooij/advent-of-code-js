const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, './input.txt')
const input = fs.readFileSync(filePath, 'utf-8')

const part1 = input
  .split('\n')
  .map((line) =>
    line
      .split('')
      .filter((n) => /^\d$/.test(n))
      .filter((_, i, a) => i === 0 || i === a.length - 1)
      .map((n, i, a) => (a.length === 1 ? n.repeat(2) : n))
      .join(''),
  )
  .reduce((sum, n) => sum + Number(n), 0)

console.log(part1)
