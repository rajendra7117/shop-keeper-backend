const { check } = require("express-validator");

// const validators = {
//   registerValidator: [
//     check("name").not().isEmpty(),
//     check("operatorName").not().isEmpty(),
//     check("shopLocation").not().isEmpty(),
//     check("category").not().isEmpty(),
//     check("emailAddress").normalizeEmail().isEmail(),
//     check("password").isLength({ min: 6 }),
//   ],
//   loginValidator: [
//     check("emailAddress").normalizeEmail().isEmail(),
//     check("password").isLength({ min: 6 }),
//   ],
//   productValidator: [
//     check("name").not().isEmpty(),
//     check("price").not().equals(0),
//     check("defaultQuantity").not().equals(0),
//   ],

// };

const registerValidator = [
    check("name").not().isEmpty(),
    check("operatorName").not().isEmpty(),
    check("shopLocation").not().isEmpty(),
    check("category").not().isEmpty(),
    check("emailAddress").normalizeEmail().isEmail(),
    check("password").isLength({ min: 6 }),
  ]

 const loginValidator =[
    check("emailAddress").normalizeEmail().isEmail(),
    check("password").isLength({ min: 6 }),
  ]

const  productValidator = [
    check("name").not().isEmpty(),
    check("price").not().equals(0),
    check("defaultQuantity").not().equals(0),
  ]


  module.exports.registerValidator = registerValidator

  module.exports.loginValidator = loginValidator

  module.exports.productValidator = productValidator