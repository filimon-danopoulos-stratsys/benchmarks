const args = process.argv.slice(2)

let count = 0
const generateIntTree = (depth) => {
  return Array.from({length: 5}, () => depth ? generateIntTree(depth-1) : count++)
}
const intTree = generateIntTree(parseInt(args[0], 10) - 1)

const traverse = (node, action, path = []) => {
  if (Array.isArray(node)) {
    return {
      children: node.map((child, i) => traverse(child, action, path.concat([i]))),
      path 
    }
  }
  return action(node, path)
}

const target = '2'.repeat(parseInt(args[0], 10)).split('').join()

let node 
const objs = traverse(intTree, (value, path) => {
  const obj = {
    value,
    path
  }
  if (path.join() === target) {
    node = obj
  }
  return obj
})


const start = performance.now()

node.value = -1

const end = performance.now()

module.exports = objs

console.log(end - start);