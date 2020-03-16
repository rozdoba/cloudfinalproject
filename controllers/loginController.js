
var robUsername = "A01047477";
var justinUsername = "A01044627";
var myPassword = "password"

exports.login = (req, res, next) => {
    res.render('login', {
        pageTitle: 'Member Login',
        heading: 'Member Login',
        requiresJS: true,
        css: 'login',
        js: 'login'
    });
};

exports.loginAttempt = (req, res, next) => {
    let {username, password} = req.body;
    if((username === myUsername || robUsername === justinUsername) && password === myPassword) {
        res.redirect(301, '/artists');
    } else {
        res.redirect(301, '/login');
    }
};