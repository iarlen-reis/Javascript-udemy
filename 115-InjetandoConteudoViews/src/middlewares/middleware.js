exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = 'Esse é o valor da váriavel local.';
    next();
};