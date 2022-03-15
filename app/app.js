const express = require('express')

const app = express()

app.use('/admin', require('../app/router/admin/admin'))

app.use('/home', require('../app/router/user/home'))

app.use('/', require('../app/router/user/intro'))

app.get('*', (req, res)=>{
    res.redirect('/home')
})

module.exports = app