const express = require('express')

const app = express()

app.get('/', async (req, res)=>{
    // let arr = await query('select * from Dictionary')

    res.render('./public/home')
})

app.get('/start', (req, res)=>{
    res.render('./public/start')
})

module.exports = app