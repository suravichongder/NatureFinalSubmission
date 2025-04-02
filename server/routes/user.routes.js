const express = require("express");
const userController = require("../controllers/user.controllers.js");

const router = express.Router();

router.post("/register", userController.register);
router.post("/login", userController.login);
router.post("/users", userController.create);
router.get("/users", userController.getAll);
router.get("/users/:id", userController.getById);
router.put("/users/:id", userController.update);
router.delete("/users/:id", userController.delete);

module.exports = router;

