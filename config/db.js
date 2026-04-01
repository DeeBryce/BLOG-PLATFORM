const mongoose = require("mongoose");

// Modern MongoDB drivers handle these automatically
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB!"))
  .catch(err => console.error("Connection error:", err));

module.exports = connectDB;