const express = require('express')
const app = express()

app.use('/',  require('../../controller/user/play'))

app.use('/start',  require('../../controller/user/start'))

module.exports = app