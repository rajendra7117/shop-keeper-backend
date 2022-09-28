const HttpError = require("../models/http-error");

const { validationResult } = require("express-validator");

const shop = require("../models/shop-model");
const registerShop = async (req, res, next) => {
  const errors = validationResult(req);

  let newShop;

  if (!errors.isEmpty()) {
    return next(new HttpError("sorry there is an error", 404));
  }
  let { emailAddress } = req.body;

  let emailExists;
  try {
    emailExists = await shop.findOne({ emailAddress: emailAddress }).exec();
  } catch (err) {
    return next(new HttpError("creating shop failed", 500));
  }

  if (emailExists) {
    return next(
      new HttpError(
        "email address is already existing, please try with a different email address",
        404
      )
    );
  }

  try {
    newShop = new shop(req.body);

    await newShop.save();
  } catch (err) {
    return next(
      new HttpError("creating shop failed, please try again later", 500)
    );
  }
  res.status(201).json({ shop: newShop.toObject({ getters: true }) });
  //
};

const loggInToShop = async(req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new HttpError("sorry invalid credentials", 404));

  }
  let {emailAddress, password} = req.body
 let exisintingShop;
 try{
    exisintingShop = await shop.findOne({emailAddress})
 }
 catch(err){
    return (next(new HttpError('login failed, please try again later', 500)))
 }
 if(!exisintingShop){
    return (next(new HttpError('email address not found, please check', 404)))
 }
 if(exisintingShop.password!==password){
    return (next(new HttpError('invalid login credentials, please check', 404)))
 }
  res.send("logged in");
};

module.exports.registerShop = registerShop;

module.exports.loggInToShop = loggInToShop;
