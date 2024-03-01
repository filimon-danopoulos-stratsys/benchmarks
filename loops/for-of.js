const args = process.argv.slice(2)
const items = Array.from(Array(parseInt(args[0], 10)).keys(), (x) => parseInt(x, 10))

let total = 0

const start = performance.now()

for (const next of items) {
  total += next
}

const end = performance.now()

module.exports = total

console.log(end - start);