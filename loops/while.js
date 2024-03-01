const args = process.argv.slice(2)
const items = Array.from(Array(parseInt(args[0], 10)).keys(), (x) => parseInt(x, 10))

let total = 0

const start = performance.now()

const length = items.length
let i = -1
while (i < length) {
  total += items[++i]
}

const end = performance.now()

module.exports = total

console.log(end - start);