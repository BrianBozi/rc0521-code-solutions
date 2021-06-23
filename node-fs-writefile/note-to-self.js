const fs = require('fs')

const noteInput = process.argv[2] + '\n';

fs.writeFile('note.txt', noteInput, (err) => {
  if (err){
    console.error(err)
  }
  console.log('note taken')
})
