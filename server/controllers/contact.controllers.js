const Contact = require("../models/contact.models.js");
 
exports.createContact = (req, res) => {
  // Check if the required fields are present
  if (!req.body?.name || !req.body?.email || !req.body?.message) {
    return res.status(400).json("Error: Missing required fields");
  }
 
  const newContact = new Contact({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
  });
 
  newContact
    .save()
    .then(() => res.json("Message sent successfully!"))
    .catch((err) => res.status(400).json("Error: " + err));
};
 