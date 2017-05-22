var express = require('express')
var app = express()
var router = require('./routes/api')
var bodyParser = require('body-parser')
var jwt = require('jsonwebtoken')


app.get('/', (req, res, next)=>{
  res.send('Yess it\'s Connected' )
})


app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


app.use('/api', router)


app.listen(4000, ()=>{
  console.log(`You connected to port 4000`);
})
