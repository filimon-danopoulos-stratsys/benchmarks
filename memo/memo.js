const args = process.argv.slice(2)
const count = parseInt(args[0], 10)


const start = performance.now()

const cache = new Map()
const fib = (x) => {
  if (x < 2) return x
  
  let cached = cache.get(x)
  if (!cached) {
    cached = fib(x - 1) + fib(x - 2)
    cache.set(x, cached)
  }
  return cached
}

const result = fib(count)


const end = performance.now()

module.exports = result

console.log(end - start);