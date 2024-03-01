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

const objs = traverse(intTree, (value, path) => ({
  value,
  path
}))

const target = '2'.repeat(parseInt(args[0], 10)).split('').join()

const start = performance.now()

let nodes = [...objs.children]
while(nodes.length) {
  const current = nodes.shift()
  if (current.children) {
    nodes.push(...current.children)
  } else {
    if (current.path.join() === target) {
      current.value = '-1'
    }
  }
}

const end = performance.now()

module.exports = nodes

console.log(end - start);