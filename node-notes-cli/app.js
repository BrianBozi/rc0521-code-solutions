const { error } = require('console')
const data = require('./data.json');
const fs = require('fs');
const { argv } = require('process');
const operator = process.argv[2];
const noteInput = process.argv[3]
const nextId = data.nextId



if (operator ==="read"){
  for(let note in data.notes){
    console.log(`${note}: ${data.notes[note]}`)
  }
}
  else if(operator === "create"){
  data.notes[nextId] = noteInput;
  data.nextId++;
  fs.writeFile('./data.json', JSON.stringify(data,  null, 2 ),'utf8', (err, create) => {
    if (err) {
      console.error(err)
    }
 console.log('note taken')
  })
}
  else if (operator === "delete"){
  if (data.notes[noteInput]) {
    delete data.notes[noteInput];
  } else {
    console.log('No note at given ID to delete');
  }
  fs.writeFile('./data.json', JSON.stringify(data, null, 2), 'utf8', (err) => {
      if (err) {
        console.error(err)
      }
      console.log('note deleted')
    })
}
  else if (operator === 'update'){
    if (data.notes[noteInput]){
        data.notes[noteInput] = process.argv[4]
    }
  fs.writeFile('./data.json', JSON.stringify(data, null, 2), 'utf8', (err) => {
    if (err) {
      console.error(err)
    }
    console.log('note Updated')
  })
  }
