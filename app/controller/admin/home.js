const express = require('express')
const {query} = require("../../database/db.fun");

const app = express()

app.get('/', async (req, res)=>{
    let sendReg = await query('select distinct region from users where region is not null')
    let sendSch = await query('select distinct school from users where school is not null')
    let sendCl = await query('select distinct class from users where class is not null')

    let region = req.query.region
    let classs = req.query.class
    let school = req.query.school
    let d = []
    let q = 'select u.fio, u.region, u.school, u.class, score from Scores s inner join users u on u.uname = s.uname where true'
    if(region) {
        q += ' and region = ?'
        d.push(region)
    }
    if(classs){
        q += ' and class = ?'
        d.push(classs)
    }
    if(school){
        q+= ' and school = ?'
        d.push(school)
    }
    q += ' order by score desc;'
    let arr = await query(q, d)


    res.render('./admin/dashboard',{
        arr, sendSch, sendReg, sendCl
    } )
})

module.exports = app