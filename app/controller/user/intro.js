const express = require('express')
const app = express()
const { query } = require('../../database/db.fun')

app.get('/', (req, res)=>{
    res.render('./public/enter')
})

app.post('/', async (req, res)=>{
    const { uname, password, fname, region, school, grade } = req.body

    // console.log(req.body)

    let r = await query('insert into users (uname, password, fio, region, school, class) values (?,?,?,?,?,?);',
        [ uname, password, fname, region, school, grade])

    req.session.uid = r.insertId
    req.session.user = uname
    res.redirect('/home')
})

module.exports = app