const express = require('express')
const app = express()
const port = 3000

app.use(express.static('json'))

app.use(function(req,res,next){
  res.status(404).json({ error: { message: "404 Not Found" } })
})


app.listen(port, function(){
  console.log(`listening on port ${port}`)
})
