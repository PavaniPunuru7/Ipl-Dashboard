const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  id: { type: String, required: true, unique: true },
  team_image_url: { type: String, required: true },
});

module.exports = mongoose.model("Team", teamSchema);
