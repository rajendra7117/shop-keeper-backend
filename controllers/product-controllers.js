const { validationResult } = require("express-validator");
const HttpError = require("../models/http-error");
const getProducts = (req, res, next) => {
  res.send("products");
};

const getProductById = (req, res) => {
  res.send("product by id");
};
const addProduct = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new HttpError("sorry incorrect product details", 404));
  }
  res.send("product added");
};

const editProduct = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new HttpError("sorry incorrect product details", 404));
  }
  res.send("editted");
};

const deleteProduct = (req, res) => {
  res.send("deleted");
};

module.exports.getProducts = getProducts;

module.exports.getProductById = getProductById;

module.exports.addProduct = addProduct;

module.exports.editProduct = editProduct;

module.exports.deleteProduct = deleteProduct;
