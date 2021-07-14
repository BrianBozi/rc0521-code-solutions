const path = require('path')

const express = require('express')


const app = express()

const dir = path.join(__dirname, 'public');
console.log("directory :", dir);


const middleWare = express.static(dir)

app.use(middleWare)

app.listen(3001, ()=> {
  console.log("server running on port 3001")
})
