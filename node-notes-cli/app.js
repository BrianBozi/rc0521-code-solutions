const { error } = require('console')
const data = require('./data.json');
const fs = require('fs');
const { argv } = require('process');
const noteInput = process.argv[3]
const nextId = data.nextId



if (process.argv[2]==="read"){
  for(let note in data.notes){
    console.log(`${note}: ${data.notes[note]}`)
  }
}

else if(process.argv[2] === "create"){
  data.notes[nextId] = noteInput;
  data.nextId++;
// Then write the data object to the file


  fs.writeFile('./data.json', JSON.stringify(data,  null, 2 ),'utf8', (err, create) => {
    if (err) {
      console.error(err)
    }
 console.log('note taken')
  })
}
