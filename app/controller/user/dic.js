const express = require('express')
const app = express()

app.get('/', (req, res)=>{
    res.render('./public/start')
})

module.exports = app