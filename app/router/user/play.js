const express = require('express')
const app = express()

app.use('/',  require('../../controller/user/play'))

app.use('/login', require('../../controller/user/login'))

app.use('/home', require('../../controller/user/home'))

app.use('/home/start',  require('../../controller/user/start'))

module.exports = app