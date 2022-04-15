const express = require('express')
const { query } = require('../../database/db.fun')

const app = express()

app.get('/', async (req, res)=>{
    let arr = await query('select * from docs')
    // console.log(arr)

    res.render('./admin/documents', {
        arr
    })
})

app.get('/:doc', async (req, res)=>{
    let doc = req.params.doc

    res.download('./public/upload/'+doc)
})

app.post('/', require('../../middlewares/upload'), async (req, res)=>{
    const { id,  docName } = req.body

    // if(id != 0){
    //     if(req.lfile == '/')
    //         await query('update Dictionary set header = ?, text = ?, author = ? where id = ?', [header, txt, author, id])
    //     else
    //         await query('update Dictionary set header = ?, text = ?, audio = ?, author = ? where id = ?', [header, txt, req.lfile, author, id])
    // }
    // else
      let result = await query("insert into docs (docName, docLink) values (?,?)", [docName, req.lfile])

    // console.log(result)
    // console.log(docName)

    res.redirect('/admin/docs')
})

app.delete('/:id', async (req, res)=>{
    let id = req.params.id
    let result = await query("delete from docs where id = ?", [id])
    // console.log(result)
    res.send(result)
})

module.exports = app