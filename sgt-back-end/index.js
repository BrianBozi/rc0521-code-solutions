const pg = require('pg');

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});


const express = require('express')

const app = express()

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




app.listen(3000,()=>{
  console.log("3000 listening")
})
