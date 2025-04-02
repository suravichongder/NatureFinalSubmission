const express = require("express");
const router = express.Router();
const orderController = require("../controllers/order.controllers");

const authenticate = require("../middleware/authenticate");

//Route to get all orders for a user, with authentication middleware
router.get("/orders", authenticate, orderController.getOrders);

module.exports = router;
