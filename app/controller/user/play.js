const express = require('express')
const app = express()
const { query } = require('../../database/db.fun')

function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}

app.get('/', async (req, res)=>{
    // console.log(req.query);
    // let count = await query('select count(*) as count from Dictionary')
    // count = count[0].count
    //
    // count = randomIntFromInterval(1, count)

    let did = req.query.dictation
    let user = req.query.uname
    let dic = await query('select * from Dictionary where id = ?', [did])
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

    let mistake = 0

    let inputArr = input.split(' ')
    let resultArr = result.split(' ')

    // console.log(inputArr)
    // console.log(resultArr)

    for(let i=0; i<resultArr.length; i++){
        if(inputArr[i] === null){
            mistake += resultArr.length - i
            break
        }

        if(inputArr[i] !== resultArr[i])
            mistake++
    }

    // console.log(mistake)
    // console.log(result)
    // console.log(req.body.uname)
    let score
    if(mistake < 5)
        score = 5
    else if(mistake < 9)
        score = 4
    else
        score = 2

    await query('insert into Scores (uname, score, did) value(?,?,?)', [uname, score, id])

    // console.log(score)

    res.render('./public/end', {
        score
    })
})

module.exports = app