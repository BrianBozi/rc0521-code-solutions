// fetch('https://jsonplaceholder.typicode.com/users')
// .then(res=> res.json())
// .then(data => console.log(data))


fetch('https://jsonplaceholder.typicode.com/users', {
  method: 'GET'
})
.then(res => res.json())
.then(data => console.log("data", data))



fetch('https://pokeapi.co/api/v2/pokemon/6', {
  method: 'GET',
})
.then(res => res.json())
.then(data => console.log("Charizard data", data))
