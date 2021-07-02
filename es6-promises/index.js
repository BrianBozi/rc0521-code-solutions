const takeAChance = require('./take-a-chance');

const chance = takeAChance("Brian")

chance.then(value => {
  console.log(value)
});


chance.catch(error => {
  console.log(error.message)
})
