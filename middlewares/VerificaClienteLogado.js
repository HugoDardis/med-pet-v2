
module.exports = function (req, res, next) {
    if (req.session.cliente) {
        next();
    } else {
        res.redirect('/login');
    }
}