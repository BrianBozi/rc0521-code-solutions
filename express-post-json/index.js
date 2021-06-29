const express = require('express')

const app = express()

let nextId = 1;

const grades = {}


app.get('/api/grades', function(req, res) {

  const studentGrades = []
  for (const student in grades){
    studentGrades.push(grades[student])
  }
  res.json(grades)
})


app.use(express.json())

app.post('/api/grades', function(req, res){
  grades[nextId] = req.body;
  grades[nextId].id = nextId;
  const abc = nextId;
  nextId++
  res.status(201).json(grades[abc]);

})

app.listen(3002, ()=>{
  console.log('local host 3002')
})
