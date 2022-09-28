const { validationResult } = require("express-validator");
const HttpError = require("../models/http-error");
const Product = require("../models/product-model");

const addProduct = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new HttpError("sorry incorrect product details", 404));
  }
  let product;
  try {
    product = new Product(req.body);
    await product.save();
  } catch (err) {
    return next(
      new HttpError("adding product failed, please try again later", 500)
    );
  }
  res.status(201).json({ product: product.toObject({ getters: true }) });
};

const getProducts = async (req, res, next) => {
  let products;

  try {
    products = await Product.find();
    console.log(products);
  } catch (err) {
    return next(
      new HttpError("sorry something went wrong, please try again later", 500)
    );
  }

  res.status(200).json({
    products: products.map((product) => product.toObject({ getters: true })),
  });
};

const getProductById = (req, res) => {
  res.send("product by id");
};

const editProduct = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new HttpError("sorry incorrect product details", 404));
  }
  let productId = req.params.id;
  let { name, price, defaultQuantity } = req.body;
  let product;
  try {
    product = await Product.findById(productId).exec();
  } catch (err) {
    console.log(err)
    return next(
      new HttpError("sorry product not found with id", 500)
    );
  }

  product.name = name;
  product.price = price;
  product.defaultQuantity = defaultQuantity;
  try {
    await product.save();
  } catch (err) {
    console.log(product);
    return next(
      new HttpError("sorry something went wrong, please try again later", 500)
    );
  }

  res.status(200).json({ product: product.toObject({ getters: true }) });
};

const deleteProduct = async (req, res, next) => {
  let productId = req.params.id;
  let product;
  try {
    product = await Product.findById(productId).exec();
  } catch (err) {
    console.log(err)
    return next(
      new HttpError("sorry product not found with given id", 500)
    );
  }
 

  try {
    await product.remove();
  } catch (err) {}
  res.send(`place with id: ${productId} is deleted`);
};

module.exports.getProducts = getProducts;

module.exports.getProductById = getProductById;

module.exports.addProduct = addProduct;

module.exports.editProduct = editProduct;

module.exports.deleteProduct = deleteProduct;
