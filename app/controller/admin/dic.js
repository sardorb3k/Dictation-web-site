const express = require('express')
const { query } = require('../../database/db.fun')

const app = express()

app.get('/', async (req, res)=>{
    let arr = await query('select * from Dictionary')

    res.render('./admin/dictation', {
        arr
    })
})

app.post('/', require('../../middlewares/upload'), async (req, res)=>{
    const { id,  header, className, author, txt } = req.body

    if(id != 0){
        if(req.lfile == '/')
            await query('update Dictionary set header = ?, class = ?, text = ?, author = ? where id = ?', [header, className, txt, author, id])
        else
            await query('update Dictionary set header = ?, class = ?, text = ?, audio = ?, author = ? where id = ?', [header, className, txt, req.lfile, author, id])
    }
    else
        await query("insert into Dictionary (header, class, text, audio, author) values (?,?,?,?,?)", [header, className, txt, req.lfile,  author])


    res.redirect('/admin/dictation')
})

app.delete('/:id', async (req, res)=>{
    let id = req.params.id

    let result = await query("delete from Dictionary where id = ?", [id])

    res.send(result)
})

module.exports = app