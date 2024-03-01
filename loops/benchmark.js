const execSync = require('child_process').execSync
const exec = (command) => execSync(command).toString().trim()

const fs = require('fs')

const benchmarks = [
  'for',
  'while',
  'for-of',
  'forEach',
  'reduce',
]
// const iterations = [10, 100, 1000, 10000, 100000, 1000000]
const iterations = [10, 100, 1000]
// const iterations = [10000, 100000, 1000000]


const result = {}
for(const benchmark of benchmarks) {
  result[benchmark] = {}
  for(const iteration of iterations) {
    result[benchmark][iteration] = exec(`node ../run ${benchmark} ${iteration}`)
  }
}

if(fs.existsSync('./result.json')) {
  fs.rmSync('./result.json')
}
fs.writeFileSync('./result.json', JSON.stringify(result), 'utf8')