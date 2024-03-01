const args = process.argv.slice(2)
const maxDepth = 4
let count = 0
const generateIntTree = (depth) => {
  return Array.from({length: 5}, () => depth ? generateIntTree(depth-1) : count++)
}
const intTree = generateIntTree(maxDepth - 1)

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

const target = (num) => `${num}`.repeat(maxDepth).split('').join()

const start = performance.now()

const update = (target) => {
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
}

for (let i = 0; i < parseInt(args[0], 10); i++) {
  update(target(Math.round(Math.random()*5)))
}

const end = performance.now()

module.exports = objs

console.log(end - start);