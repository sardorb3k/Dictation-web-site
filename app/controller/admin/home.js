const express = require('express')
const {query} = require("../../database/db.fun");

const app = express()

app.get('/', async (req, res)=>{
    let arr = await query('select *from Scores order by score desc;')

    // console.log(arr)
    res.render('./admin/dashboard',{
        arr
    } )
})

module.exports = app