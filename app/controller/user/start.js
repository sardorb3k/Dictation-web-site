const express = require('express')
const { query } = require('../../database/db.fun')

const app = express()

function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}

app.get('/', async (req, res)=>{
    // console.log(req.query.u  name);
    let count = await query('select count(*) as count from Dictionary')
    count = count[0].count

    count = randomIntFromInterval(1, count)

    let user = req.query.uname
    let dic = await query('select * from Dictionary where id = ?', [count])
    dic = dic[0]

    // console.log(dic);

    if(req.query.check === 'text')
        res.render('./public/text', {
            dic, user
        })
    else if(req.query.check === 'audio')
        res.render("./public/audio", {
            dic, user
        })
    else
        res.redirect('/home')
})

app.post('/' , async (req, res)=>{
    let input = req.body.textarea
    let id = req.body.id
    let uname = req.body.uname

    let result = await query('select text from Dictionary where id = ?', [id])
    result = result[0].text

    let score = 0

    for(let i=0; i<input.length && i<result.length; i++){
        if(input[i] === result[i])
            score++
    }

    // console.log(result)
    // console.log(req.body.uname)

    await query('insert into Scores (uname, score, did) value(?,?,?)', [uname, score, id])

    res.render('./public/end', {
        score
    })
})

module.exports = app