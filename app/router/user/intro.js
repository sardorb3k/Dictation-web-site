const express = require('express')
const app = express()

app.use('/', require('../../controller/user/intro'))

module.exports = app