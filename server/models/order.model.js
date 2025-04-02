var mongoose = require("mongoose");

var itemSchema = new mongoose.Schema({
  product_id: String,
  product_name: String,
  quantity: Number,
  price: Number,
  total_price: Number,
});

var orderSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  items: [itemSchema],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

var Order = mongoose.model("Order", orderSchema);

module.exports = Order;
