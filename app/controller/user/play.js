const express = require('express')
const { query } = require('../../database/db.fun')

const app = express()

app.get('/', async (req, res)=>{
    // let arr = await query('')

    res.render('./public/enter')
})

module.exports = app