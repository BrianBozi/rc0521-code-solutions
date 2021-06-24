const { error } = require('console')
const data = require('./data.json');
const fs = require('fs');
const { argv } = require('process');


if (process.argv[2]==="read"){
  for(let note in data.notes){
    console.log(`${note}: ${data.notes[note]}`)
  }
}
