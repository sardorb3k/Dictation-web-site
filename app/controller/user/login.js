const express = require('express')
const { query } = require('../../database/db.fun')

const app = express()

app.post('/', async (req, res)=>{
    const { fname, uname, pwd } = req.body

    let r = await query('insert into users (FIO, uname, pwd) values (?,?,?)', [fname, uname, pwd])

    res.redirect('/home')
})

module.exports = app