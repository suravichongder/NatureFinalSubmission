const express = require("express");
const CartController = require("../controllers/cart.controllers.js");
const router = express.Router();
const authenticate = require("../middleware/authenticate");

// Route to get the cart details for a user, with authentication middleware
router.get("/cart", authenticate, CartController.getCart);

// Route to add a product to the cart, with authentication middleware
router.post(
  "/products/:id/add-to-cart",
  authenticate,
  CartController.addToCart
);

// Route to purchase the items in the cart, with authentication middleware
router.post("/cart/buy", authenticate, CartController.buyCart);
router.delete(
  "/cart/items/:productId",
  authenticate,
  CartController.deleteCartItem
);
// Route to update the quantity of a cart item, with authentication middleware
router.put(
  "/cart/items/:productId",
  authenticate,
  CartController.updateCartItemQuantity
);

module.exports = router;
