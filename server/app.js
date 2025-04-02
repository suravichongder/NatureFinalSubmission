const express = require("express");
const multer = require("multer");
const cors = require("cors");
const path = require("path");
const upload = require("./middleware/upload");
const app = express();
const cartRoutes = require("./routes/cart.routes");
const productRoutes = require("./routes/product.routes");
const userRoute = require("./routes/user.routes.js");
const connectDB = require("./db/db.config");
const orderRoutes = require("./routes/order.routes");
const contactRoutes = require("./routes/contact.routes.js");
const feedbackRoutes = require("./routes/feedback.routes.js");

connectDB;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(cors());

app.use("/user", userRoute);
app.use("/", productRoutes);
app.use("/", cartRoutes);
app.use("/", orderRoutes);
app.use("/contact", contactRoutes);
app.use("/feedback", feedbackRoutes);

app.listen(4000, () => {
  console.log("Server started on http://localhost:4000");
});
