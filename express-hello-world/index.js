const express  = require('express')

const app = express()

app.use(function (req, res){
  console.log(req.method)
  res.send("This is the response from the app.use")
})
app.listen(3000, ()=> {
  console.log('server is working')
})
