const execSync = require('child_process').execSync
const exec = (command) => execSync(command).toString().trim()

const fs = require('fs')

const benchmarks = [
  'array',
  'object',
  'object-in',
  'set',
  'map'
]
const iterations = [10, 100, 1000]


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