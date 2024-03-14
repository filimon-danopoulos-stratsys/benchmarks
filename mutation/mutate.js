const args = process.argv.slice(2)
const items = Array.from(Array(parseInt(args[0], 10)).keys(), (x) => parseInt(x, 10)).reduce((result, next) => {
  result[next] = next
  return result
}, {})

const target = Math.round(items.length / 2)

const start = performance.now()

items[target] = -1

const end = performance.now()

module.exports = items

console.log(end - start);