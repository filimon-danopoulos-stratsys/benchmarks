const execSync = require('child_process').execSync
const exec = (command) => execSync(command).toString().trim()


const args = process.argv.slice(2)

const runs = 10
let result = []
for(let i = 0; i < runs; i++) {
  result.push(+(exec(`node ${args[0]} ${args[1]}`)))
}

const average = result.reduce((sum, next) => sum + next, 0) / result.length
console.log((average*1000).toFixed(2))
