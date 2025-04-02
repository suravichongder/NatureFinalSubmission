const express = require("express");
const router = express.Router();
const feedbackController = require("../controllers/feedback.controllers.js");

router.post("/feedback", feedbackController.createFeedback);

module.exports = router;
