const express = require('express')
const auth  = require('../app/middlewares/auth')
const {query} = require("./database/db.fun");

const app = express()

app.use('/admin', require('../app/router/admin/admin'))

app.use('/home', [ auth, require('../app/router/user/home')])

app.use('/', require('../app/router/user/intro'))

app.post('/login', async (req, res)=>{
    const { uname, password } = req.body

    let u = await query('select * from users where uname = ? and password = ?',
        [uname, password])

    // console.log(u)
    if(!u || u.length == 0)
        return res.redirect('/')
    req.session.uid = u[0].id
    req.session.user = u[0].uname

    // console.log(req.session)

    res.redirect('/home')
})

app.get('*', (req, res)=>{
    res.redirect('/home')
})

module.exports = app