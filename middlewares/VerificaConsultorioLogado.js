module.exports = function (req, res, next) {
    if (req.session.consultorio) {
        next();
    } else {
        res.redirect('/login');
    }
}