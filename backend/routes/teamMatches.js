const express = require("express");
const router = express.Router();
const TeamMatch = require("../models/TeamMatch");
// GET team match data by teamId
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const data = await TeamMatch.findOne({ teamId: id });
    res.status(200).json(data || {});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST (create or update) team match data
router.post("/:id", async (req, res) => {
  const { id } = req.params;
  const newTeamMatch = req.body;

  try {
    const data = await TeamMatch.findOneAndUpdate(
      { teamId: id },
      { ...newTeamMatch, teamId: id }, // enforce consistency
      { upsert: true, new: true }
    );
    res.status(200).json({
      message: "TeamMatch added/updated successfully",
      data,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
