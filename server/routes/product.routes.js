const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.controllers");
const upload = require("../middleware/upload");

router.get("/products", productController.getProduct);
router.get("/products/:id", productController.getsingleProduct);
router.get("/category/:category", productController.getProductsByCategory);
router.post(
  "/add-product",
  upload.array("images", 5),
  productController.addProduct
);

module.exports = router;
