const express = require('express')
const app = express()

app.use('/',  require('../../controller/user/play'))

module.exports = app