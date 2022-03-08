const express = require('express')

const app = express()

app.use('/admin', require('../app/router/admin/admin'))

app.use('/', require('../app/controller/user/play'))

module.exports = app