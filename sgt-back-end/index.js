const pg = require('pg');

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});


const express = require('express')

const app = express()


// get request
app.get("/api/grades", function(req, res){
console.log("working")

const sql =
`select "gradeId",
        "name",
        "course",
        "score"
        from "grades"`;


const params = [];

db.query(sql,params)
.then(result =>{
 res.status(200).json(result.rows)
})
.catch(error => {
  res.status(500).send(`error: "error bad query`)
})

})

// middleWare so we can read the json data
const middleWare = express.json();
app.use(middleWare);


// post
app.post("/api/grades", function(req,res){
  if(!req.body){
    res.status(400).send({error: 'request must have all inputs'})
  } else{
    const newGrade = req.body



    const sql =  `
      INSERT INTO "grades"("name", "course", "score")
      VALUES($1, $2, $3)
        `;
    const params = [newGrade.name, newGrade.course, newGrade.score]
    // const values = ($1, $2, $3)


    db.query(sql, params)
    .then(result => {
      res.status(201).json(result.rows)
    })
    .catch(err =>{
      console.log(err)
      res.status(500).json({error: " an unexpecetd error occured"})
    })
  }
})


app.put('/api/grades/:id', function(req,res){
  console.log("put is working")
  const id = parseInt(req.params.id)
  // console.log("grade id:", id)

  // if the id match then we can rewrite
  const content = req.body
  const sql = `UPDATE "grades" SET "name" = $1, "course" = $2, "score" = $3 WHERE "gradeId"= $4`
  const params = [content.name, content.course, content.score, id]

  console.log("These are the params", params)

  db.query(sql, params)
  .then(result =>{
    res.status(200).json(result.rows)
  })
  .catch(err =>{
    console.log(err)
    res.status(500).json({error: "missing one of the following 'name', 'course', 'score' "})
  })

})
app.delete('/api/grades/:id', function (req,res){
  const id = parseInt(req.params.id)
  const sql = `DELETE FROM "grades" WHERE "gradeId" = $1`
  const params = [id]
  console.log("The id is :", params)

  db.query(sql, params)
  .then(result =>{
    res.status(204).json(result.rows)
  })
  .catch(err =>{
    console.log(err)

    res.status(500).json({error: " error querying the database"})
  })

})


app.listen(3000, () => {
  // http - v get: 3000 / api / grade
  console.log("3000 listening")
})
