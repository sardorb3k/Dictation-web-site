const express = require('express')
const { query } = require('../../database/db.fun')

const app = express()

app.get('/', async (req, res)=>{
    // let arr = await query('select * from Dictionary')

    res.render('./public/start')
})

module.exports = app