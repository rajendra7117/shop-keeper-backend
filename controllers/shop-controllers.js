const shop = require('../models/shop-model')
const HttpError = require('../models/http-error')

const {validationResult} = require('express-validator')
const registerShop = (req, res,next) => {
    const errors = validationResult(req)
   
    if(!errors.isEmpty()){
       return (next(new HttpError('sorry there is an error', 404)))
    }
    res.send('registered')
}

const loggInToShop  = (req, res,next) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return (next(new HttpError('sorry invalid credentials', 404)))
    }
    res.send('logged in')
}




module.exports.registerShop = registerShop;

module.exports.loggInToShop = loggInToShop