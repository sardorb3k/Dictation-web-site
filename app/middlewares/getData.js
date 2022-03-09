module.exports = (req, res, next)=>{
    // console.log(req.body);
    let uname = req.body.uname
    let check = req.body.check


    // console.log(uname);
    req.data = {
        uname:uname,
        check:check
    }

    next()
}