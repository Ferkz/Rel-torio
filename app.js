const express = require('express')
const app = express()
const path = require('path')
const port = process.env.port || 8180
const bodyParser = require('body-parser')
//const mongoose = require('')

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.set('views',path.join(__dirname,'/src/views'))
app.use(express.static(path.join(__dirname,'/public')))
app.set('view engine','ejs')
require('./src/routers/routers')(app)

app.listen(port,()=>{
    console.log(`Server on port ${port}`);
})