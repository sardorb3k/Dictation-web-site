let upload = (req, res, next) => {

    try {
        let fileName = new Date().getTime() + Math.random()
        const sha256 = require("sha256")
        fileName = sha256(fileName.toString())

        // validate

        let sampleFile = req.files.lfile;

        let mimi = sampleFile.mimetype.split("/");

        // console.log(mimi)
        if (sampleFile.size > 10000000){
            req.lfile = "/"
            return  next()
        }

        // mv()  to save
        sampleFile.mv(require("path").join(__dirname, `../../public/upload/${fileName}.${mimi[1]}`),
            async(err) => {
                req.lfile = fileName + "." + mimi[1]
                return next()
            })
    } catch (err) {
        // console.log("err in upload line 24 \n\n\n"+err)
        req.lfile = "/" ;
        return  next()
    }
}

module.exports = upload