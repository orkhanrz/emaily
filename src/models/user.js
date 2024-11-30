const mongoose = require("mongoose");

const User = new mongoose.Schema({
  googleId: String
});

module.exports = mongoose.model("User", User);
