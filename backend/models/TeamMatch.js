const mongoose = require("mongoose");

const teamMatchSchema = new mongoose.Schema({
  teamId: { type: String, required: true, unique: true },
  team_banner_url: String,
  latest_match_details: Object,
  recent_matches: Array,
});

module.exports = mongoose.model("TeamMatch", teamMatchSchema);
