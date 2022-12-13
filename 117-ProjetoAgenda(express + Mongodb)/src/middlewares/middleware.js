exports.middlewareGlobal = (req, res, next) => {
    res.locals.erros = req.flash('erros');
    res.locals.success = req.flash('success');
    res.locals.user = req.session.user;
    next();
};

exports.userIsConnected = (req, res, next) => {
    if(req.session.user) {
        res.redirect('/');
    }
    next();
};

exports.checkCsrfError = (error, req, res, next) => {
    if(error) {
        return res.render('error404', {
            titulo: 'ERROR 404',
        });
    }
    next();
};  

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
}