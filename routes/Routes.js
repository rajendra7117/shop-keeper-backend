const express = require("express");
const router = express.Router();

const shopControllers = require('../controllers/shop-controllers')

const productControllers = require('../controllers/product-controllers')

router.post("/register/", shopControllers.registerShop);

router.post("/login/", shopControllers.loggInToShop);

router.get("/products/", productControllers.getProducts);

router.get("/product/:id", productControllers.getProductById)

router.post("/add-product/", productControllers.addProduct);

router.patch("/edit-product/:id", productControllers.editProduct);

router.delete("/delete-product/:id", productControllers.deleteProduct);

router.use("*", (req, res) => {
  res.send("route not found");
});

module.exports = router;
