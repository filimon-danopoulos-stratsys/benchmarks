const args = process.argv.slice(2)
const numbers = Array.from(Array(parseInt(args[0], 10)).keys()).flatMap((x) => [{
  value: parseInt(x, 10),
  order: Math.random()
}, {
  value: parseInt(x, 10),
  order: Math.random()
}, {
  value: parseInt(x, 10),
  order: Math.random()
}])
.sort((a, b) => a.order - b.order)

const lookup = {}
const start = performance.now()

const length = numbers.length
for(let i = 0; i < length; i++) {
  if (!(numbers[i] in lookup)) {
    lookup[numbers[i]] = true
  }
}

const end = performance.now()

module.exports = lookup

console.log(end - start);