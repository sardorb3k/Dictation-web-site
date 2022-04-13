const express = require('express')
const app = express()

app.get('/', (req, res)=>{
    // console.log(req.session)
    res.render('./public/start', {
        user : req.session.user
    })
})

module.exports = app