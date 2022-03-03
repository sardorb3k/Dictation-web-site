const express = require('express')
const app = express()

app.use(['/home', '/'], require('../../controller/admin/home'))

app.use('/dictionary', require('../../controller/admin/dic'))

module.exports = app