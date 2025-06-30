const express = require("express");
const router = express.Router();
const Team = require("../models/Team");

// GET all teams
router.get("/", async (req, res) => {
  try {
    const teams = await Team.find();
    res.json({ teams });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST a new team
router.post("/", async (req, res) => {
  const newTeam = req.body;
  try {
    const newTeamDoc = await Team.create(newTeam);
    res.json({ message: "Team added successfully!", newTeamDoc });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE all teams (reset)
router.delete("/", async (req, res) => {
  try {
    await Team.deleteMany();
    res.json({ message: "Teams reset successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
