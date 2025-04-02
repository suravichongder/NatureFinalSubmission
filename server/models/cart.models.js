var mongoose = require("mongoose");

var itemSchema = new mongoose.Schema({
  product_id: String,
  product_name: String,
  quantity: Number,
  price: Number,
  total_price: Number,
});

var cartSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  items: [itemSchema],
});

var Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
