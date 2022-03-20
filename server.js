const express = require("express");
const path = require("path");
const app = express();
const catsRoutes = require("./routes/cats");
const sheltersRoutes = require("./routes/shelters");

require("dotenv").config();
const cors = require("cors");
const PORT = process.env.PORT || 3001;

// middleware
app.use(express.json());
app.use(express.static("public"));
app.use(cors());

// home route
app.get("/", (req, res) => {
  res.send("Welcome to meowadopt API");
});

// routing videos
app.use("/cats", catsRoutes);
app.use("/shelters", sheltersRoutes);

// start listening on PORT
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
