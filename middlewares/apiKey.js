const ErrorHandler = require("../errors/ErrorHandler");

function apiKey(req, res, next) {
    const api_key = '123456';
    const userAPIKey = req.query.api_key
    console.log(req.query.api_key);
    if (userAPIKey && userAPIKey === api_key) {
        next();
    }
    else {
        ;
        next(ErrorHandler.forbidden('api key is not valid'))
    }



}
module.exports = apiKey;