const fs = require('fs')



fs.readFile(String(process.argv[2]), 'utf8', (error, text) => {
  console.log(text)
})
