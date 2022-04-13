let auth = (req, res, next) => {
    if(!req.session.uid)
        return res.redirect('/')

    next()
}

module.exports = auth