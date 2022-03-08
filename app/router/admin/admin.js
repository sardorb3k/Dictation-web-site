const express = require('express')
const auth = require('../../middlewares/auth')
const app = express()

app.use('/login',  require('../../controller/admin/login'))

app.use('/logout', require('../../controller/admin/logout'))

app.use(['/home', '/'], auth, require('../../controller/admin/home'))

app.use('/dictation', auth, require('../../controller/admin/dic'))

module.exports = app