const fs = require('fs')

fs.readFile('dijkstra.txt', 'utf8', (error, text) => {
  console.log(text)
})
