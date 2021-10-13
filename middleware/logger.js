const logger = (req, res, next) => {
    const day = new Date().getDay()
    const hour = new Date().getHours()
    if (day > 0 && day < 6 && hour < 17 && hour > 9) {

        return next()
    }

    return res.render('closed', { title: 'closed' })
}




module.exports = logger