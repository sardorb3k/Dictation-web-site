const express = require('express')

const app = express()

app.use('/admin', require('../app/router/admin/admin'))

app.use('/', require('../app/router/user/play'))

app.get('*', (req, res)=>{
    res.redirect('/')
})

module.exports = app