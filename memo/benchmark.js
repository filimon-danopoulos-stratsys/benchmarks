const execSync = require('child_process').execSync
const exec = (command) => execSync(command).toString().trim()

const fs = require('fs')

const benchmarks = [
  'no-memo',
  'memo'
]
const iterations = [10, 20, 30]


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