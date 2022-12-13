exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = 'Esse é o valor da váriavel local.';
    next();
};

exports.checkCsrfError = (error, req, res, next) => {
    if(error && 'EBADCSRFTOKEN' === error.code) {
        return res.render('error404', {
            titulo: 'ERROR 404',
        });
    }
};

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
}