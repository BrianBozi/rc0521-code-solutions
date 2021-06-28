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
};

app.get('/api/grades', function(req, res) {

  const arr = [];

  for(const student in grades){
    arr.push(grades[student])
  }

  res.json(arr)

})




app.listen(3001, ()=>{
 console.log("port 3000 is listening... ALL ABOARD!!!")
})
