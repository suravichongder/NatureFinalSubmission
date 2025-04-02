const Product = require("../models/product.models");
const Cart = require("../models/cart.models");
const Order = require("../models/order.model");
 
// Fetch all products
exports.getProduct = async (req, res) => {
  try {
    const products = await Product.find(); // Retrieve all products from the database
    if (!products || products.length === 0) {
      return res.status(404).send("No products found!");
    }
    return res.json(products); // Send the retrieved products as a JSON response
  } catch (err) {
    console.error("Error fetching product:", err);
    res.status(500).send("Error fetching product");
  }
};
 
// Fetch a single product by ID
exports.getsingleProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params?.id); // Retrieve a product by its ID from the database
    if (!product) {
      return res.status(404).send("Product not found!");
    }
    return res.json(product); // Send the retrieved product as a JSON response
  } catch (err) {
    console.error("Error fetching product:", err);
    res.status(500).send("Error fetching product");
  }
};
 
// Add a new product
exports.addProduct = async (req, res) => {
  try {
    const productData = req.body; // Get product data from the request body
    if (!productData) {
      return res.status(400).send("Error: Product data is required");
    }
 
    const images = req.files?.map((file) => file.path) || []; // Get the file paths of uploaded images
 
    const newProduct = new Product({
      ...productData, // Spread the product data into the new product object
      images, // Add the images array to the new product object
    });
 
    await newProduct.save(); // Save the new product to the database
    res.status(201).send("Product added successfully");
  } catch (error) {
    console.error("Error adding product:", error); // Log any errors that occur
    res.status(500).send("Error adding product");
  }
};
 
// Fetch all orders for a user
exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user_id: req.user?.id }); // Retrieve all orders for the user from the database
    if (!orders || orders.length === 0) {
      return res.status(404).send("No orders found!");
    }
    return res.json(orders); // Send the retrieved orders as a JSON response
  } catch (err) {
    console.error("Error fetching orders:", err); // Log any errors that occur
    res.status(500).send("Error fetching orders");
  }
};
 
// Fetch products by category
exports.getProductsByCategory = async (req, res) => {
  try {
    const { category } = req.params; // Get the category from the request parameters
    if (!category) {
      return res.status(400).send("Error: Category is required");
    }
 
    const products = await Product.find({ category }); // Retrieve products by category from the database
    if (!products || products.length === 0) {
      return res.status(404).send("No products found for this category!");
    }
 
    res.status(200).json(products); // Send the retrieved products as a JSON response
  } catch (err) {
    console.error("Error fetching products by category:", err); // Log any errors that occur
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};
 
 