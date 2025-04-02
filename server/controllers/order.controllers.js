const Order = require("../models/order.model");
 
// Function to get all orders for a user
exports.getOrders = async (req, res) => {
  try {
    // Check if user ID is present
    if (!req.user?.id) {
      return res.status(400).send("Error: User ID is required");
    }
 
    // Find all orders for the user
    const orders = await Order.find({ user_id: req.user.id });
    if (!orders || orders.length === 0) {
      // If no orders are found, return a 404 status
      return res.status(404).send("No orders found!");
    }
 
    // Log the fetched orders
    console.log("Orders fetched:", orders);
    // Return the orders as JSON
    return res.json(orders);
  } catch (err) {
    // Log any errors and return a 500 status
    console.error("Error fetching orders:", err);
    res.status(500).send("Error fetching orders");
  }
};
 