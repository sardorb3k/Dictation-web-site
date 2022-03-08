const express = require('express')

const app = express()

app.get('/', (req, res)=>{
    res.render('./admin/login')
})

app.post('/', (req, res)=>{
    const {uname, password } = require('../../../config.json').admin

    const h = req.body

    console.log(req.body)

    if(h.uname === uname && h.pwd === password){
        req.session.isAdmin = true

        return res.redirect('/admin/')
    }

    res.redirect('/')
})


module.exports = app