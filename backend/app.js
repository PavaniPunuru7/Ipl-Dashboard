const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/ipl")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB:", err));

// Routes
const teamsRouter = require("./routes/teams");
const teamMatchesRouter = require("./routes/teamMatches");
app.use("/api/teams", teamsRouter);
app.use("/api/team_matches", teamMatchesRouter);

module.exports = app;
