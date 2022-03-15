const express = require('express')
const app = express()

app.use('/', require('../../controller/user/home'))

app.use('/dic', require('../../controller/user/dic'))

app.use('/play', require('../../controller/user/play'))

module.exports = app