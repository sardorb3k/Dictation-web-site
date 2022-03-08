const express = require('express')
const app = express()

// logout
app.get('/', (req, res)=>{
    console.log("destroy")
    req.session.destroy()
    res.redirect('/')
})

module.exports = app