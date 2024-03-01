const args = process.argv.slice(2)
const count = parseInt(args[0], 10)


const start = performance.now()

const fib = (x) => {
  if (x < 2) {
    return x
  }
  return fib(x - 1) + fib(x - 2)
}

const result = fib(count)


const end = performance.now()

module.exports = result

console.log(end - start);