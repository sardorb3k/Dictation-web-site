const express = require('express')
const { Port } = require('./config.json').app
const app = express()



app.listen(Port, ()=>{
    console.log(`Server started => \nhttp://localhost:${Port}`)
})