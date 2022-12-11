exports.middlewareGlobal = (req, res, next) => {
    console.log('PASSEI NO MIDDLEWARE GLOBAL');
    next();
};