
const fs = require('fs');
const ranNumber = Math.random() + '\n';

fs.writeFile('random.txt', ranNumber.toString(), (err) => {
  if (err){
    console.error(err)
  }
  console.log('the file has been saved!')
})
