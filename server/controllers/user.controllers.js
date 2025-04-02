const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/user.models.js");
 
// Register a new user
exports.register = async (req, res) => {
  const { userName, email, phone, password, isAdmin } = req.body;
 
  if (!userName || !email || !phone || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }
 
  const hashedPassword = await bcrypt.hash(password, 10);
 
  try {
    const user = new UserModel({
      userName,
      email,
      phone,
      password: hashedPassword,
      isAdmin,
    });
    await user.save();
    res.json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ error: "Email already exists" });
  }
};
 
// Login a user
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("Received Login Request:", req.body);
 
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }
 
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }
 
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }
 
    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      "secretkey",
      { expiresIn: "1h" }
    );
 
    res.json({ isAdmin: user.isAdmin, token });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Server error" });
  }
};
 
// Create a new user
exports.create = (req, res) => {
  const { userName, email, phone, password } = req.body;
 
  if (!userName || !email || !phone || !password) {
    return res.status(400).json({ error: "All fields are required" });
   const user = new UserModel({
    userName,
    email,
    phone,
    password,
  });
 
  user
    .save()
    .then((result) => res.send({ message: "Successfully saved", data: result }))
    .catch((err) => res.send({ message: "Error", data: err }));
};
}
 
// Fetch all users
exports.getAll = (req, res) => {
  UserModel.find()
    .then((response) => res.send(response))
    .catch((err) => res.send(err));
};
 
// Fetch a user by ID
exports.getById = (req, res) => {
  const id = req.params?.id;
 
  if (!id) {
    return res.status(400).json({ error: "User ID is required" });
  }
 
  UserModel.findById(id)
    .then((response) => {
      if (!response) {
        return res.status(404).json({ error: "User not found" });
      }
      res.send(response);
    })
    .catch((err) => res.send(err));
};
 
// Update a user by ID
exports.update = (req, res) => {
  const id = req.params?.id;
  const { userName, email, phone, password } = req.body;
 
  if (!id || !userName || !email || !phone || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }
 
  const user = {
    _id: id,
    userName,
    email,
    phone,
    password,
  };
 
  UserModel.findByIdAndUpdate(id, user)
    .then((result) =>
      res.send({ message: "Successfully updated", data: result })
    )
    .catch((err) => res.send({ message: err, data: null }));
};
 
// Delete a user by ID
exports.delete = (req, res) => {
  const id = req.params?.id;
 
  if (!id) {
    return res.status(400).json({ error: "User ID is required" });
  }
 
  UserModel.findByIdAndDelete(id)
    .then((response) =>
      res.send({ message: "Successfully deleted", data: response })
    )
    .catch((error) => res.send({ message: error, data: null }));
};
 