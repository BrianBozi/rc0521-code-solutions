const express = require('express')
const app = express()

const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
}


app.get('/api/grades', function(req, res){

  let studentGrades = [];

  for (const student in grades){
    studentGrades.push(grades[student])
  }
  console.log(grades)
  res.json(grades)
})



app.delete('/api/grades/:id', function(req, res) {
  const id = req.params.id
  delete grades[id]
  console.log("the id is ", req.params.id)

  res.sendStatus(204)
})


app.listen(3001, ()=> {
  console.log('server live')
})
