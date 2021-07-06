const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];


const sum = numbers.reduce((acc, val) => acc + val)
console.log("sum:", sum)

const product = numbers.reduce((acc, val) => acc * val)
console.log("Product:", product)

const balance = account.reduce((acc, val) => {


  if (val.type === "deposit"){

      acc +=val.amount
  } else if (val.type === "withdrawal"){

      acc -= val.amount
  }

  return acc
}, 0)

console.log("balance: ", balance)


const composite = traits.reduce((acc, val) => {
  return Object.assign(acc, val)
})

console.log("composite", composite)
