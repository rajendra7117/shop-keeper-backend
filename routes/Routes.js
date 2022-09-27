const express = require("express");
const router = express.Router();

const validators = require("../Validators/RouteBodyValidators");

const shopControllers = require("../controllers/shop-controllers");

const productControllers = require("../controllers/product-controllers");
// console.log(validators.registerValidator);

router.post(
  "/register/",
  validators.registerValidator,
  shopControllers.registerShop
);

router.post("/login/", validators.loginValidator, shopControllers.loggInToShop);

router.get("/products/", productControllers.getProducts);

router.get("/product/:id", productControllers.getProductById);

router.post(
  "/add-product/",
  validators.productValidator,
  productControllers.addProduct
);

router.patch(
  "/edit-product/:id",
  validators.productValidator,
  productControllers.editProduct
);

router.delete("/delete-product/:id", productControllers.deleteProduct);

router.use("*", (req, res) => {
  res.send("route not found");
});

module.exports = router;
