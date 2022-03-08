const express = require('express')
const {query} = require("../../database/db.fun");

const app = express()

app.get('/', async (req, res)=>{
    let arr = await query('select *from V_ScoreWithName;')

    res.render('./admin/dashboard',{
        arr
    } )
})

module.exports = app