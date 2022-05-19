const express = require('express')
const app = express()
const {query} = require('../../database/db.fun')

app.get('/', async (req, res)=>{
    // console.log(req.session)
    const uid = req.session.uid
    let dic = await query('call sp_getDicByClass(?)', [uid])
    dic = dic[0]

    res.render('./public/start', {
        user : req.session.user,
        dic
    })
})

module.exports = app