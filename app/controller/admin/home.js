const express = require('express')
const {query} = require("../../database/db.fun");

const app = express()

app.get('/', async (req, res)=>{
    let arr = await query('select u.fio, u.region, u.school, u.class, score from Scores s inner join users u on u.uname = s.uname order by score desc;')

    // console.log(arr)
    res.render('./admin/dashboard',{
        arr
    } )
})

module.exports = app