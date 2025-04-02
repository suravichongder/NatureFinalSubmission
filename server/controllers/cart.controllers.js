const Product = require("../models/product.models");
const Cart = require("../models/cart.models");
const Order = require("../models/order.model");

// Function to get the cart details for a user
exports.getCart = async (req, res) => {
  try {
    // Find the cart for the user
    const cart = await Cart.findOne({ user_id: req.user?.id });
    if (!cart) {
      // If no cart is found, return a 404 status
      return res.status(404).send("Cart not found!");
    }
    // Return the cart details as JSON
    return res.json(cart);
  } catch (err) {
    // Log any errors and return a 500 status
    console.error("Error fetching cart:", err);
    res.status(500).send("Error fetching cart");
  }
};

// Function to add a product to the cart
exports.addToCart = async (req, res) => {
  try {
    // Find the product by ID
    const product = await Product.findById(req.params?.id);
    if (!product) {
      // If no product is found, return a 404 status
      return res.status(404).send("Product not found!");
    }

    // Find the cart for the user, or create a new one if it doesn't exist
    let cart = await Cart.findOne({ user_id: req.user?.id });
    if (!cart) {
      cart = new Cart({ user_id: req.user?.id, items: [] });
    }

    // Create a new item to add to the cart
    const item = {
      product_id: product._id,
      product_name: product.name,
      quantity: req.body?.quantity || 1,
      price: product.price,
      total_price: product.price * (req.body?.quantity || 1),
    };

    // Add the item to the cart and save the cart
    cart.items.push(item);
    await cart.save();

    // Return a success message
    return res.status(200).send(`Product ${product.name} added to cart!`);
  } catch (err) {
    // Log any errors and return a 500 status
    console.error("Error adding product to cart:", err);
    res.status(500).send("Error adding product to cart");
  }
};

// Function to purchase the items in the cart
exports.buyCart = async (req, res) => {
  try {
    // Find the cart for the user
    const cart = await Cart.findOne({ user_id: req.user?.id });
    if (!cart || cart.items.length === 0) {
      // If the cart is empty, return a 400 status
      return res.status(400).send("Cart is empty!");
    }

    // Create a new order with the items from the cart
    const order = new Order({ user_id: req.user?.id, items: cart.items });
    await order.save();

    // Clear the cart after purchase
    await Cart.deleteOne({ user_id: req.user?.id });
    // Return a success message
    return res.status(200).send("Products purchased successfully!");
  } catch (err) {
    // Log any errors and return a 500 status
    console.error("Error purchasing cart:", err);
    res.status(500).send("Error purchasing cart");
  }
};

exports.deleteCartItem = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user_id: req.user?.id });
    if (!cart) {
      return res.status(404).send("Cart not found!");
    }

    const itemIndex = cart.items.findIndex(
      (item) => item.product_id.toString() === req.params?.productId
    );
    if (itemIndex === -1) {
      return res.status(404).send("Item not found in cart!");
    }

    cart.items.splice(itemIndex, 1);
    await cart.save();

    return res.status(200).send("Item deleted from cart!");
  } catch (err) {
    console.error("Error deleting item from cart:", err);
    res.status(500).send("Error deleting item from cart");
  }
};

exports.updateCartItemQuantity = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user_id: req.user?.id });
    if (!cart) {
      return res.status(404).send("Cart not found!");
    }

    const itemIndex = cart.items.findIndex(
      (item) => item.product_id.toString() === req.params?.productId
    );
    if (itemIndex === -1) {
      return res.status(404).send("Item not found in cart!");
    }

    cart.items[itemIndex].quantity = req.body?.quantity;
    cart.items[itemIndex].total_price =
      cart.items[itemIndex].price * req.body?.quantity;
    await cart.save();

    return res.status(200).send("Item quantity updated!");
  } catch (err) {
    console.error("Error updating item quantity:", err);
    res.status(500).send("Error updating item quantity");
  }
};
