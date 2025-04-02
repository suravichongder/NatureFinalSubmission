const Feedback = require("../models/feedback.models.js");
 
exports.createFeedback = (req, res) => {
  // Check if the required fields are present
  if (!req.body?.name || !req.body?.email || !req.body?.feedback) {
    return res.status(400).json("Error: Missing required fields");
  }
 
  const newFeedback = new Feedback({
    name: req.body.name,
    email: req.body.email,
    feedback: req.body.feedback,
  });
 
  newFeedback
    .save()
    .then(() => res.json("Feedback saved!"))
    .catch((err) => res.status(400).json("Error: " + err));
};
 