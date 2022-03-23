const express = require("express");
const fs = require("fs");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");

// shelter routes
const allShelters = JSON.parse(
  fs.readFileSync("./data/shelters.json", "utf-8")
);

const allCats = JSON.parse(fs.readFileSync("./data/cats.json", "utf-8"));

// get all shelters
router.get("/", (req, res) => {
  try {
    res.send(allShelters);
  } catch (error) {
    res.send("Error reading shelters data", error);
  }
});

// get a specific shelters
router.get("/:id", (req, res) => {
  const foundShelter = allShelters.find((data) => data.id === req.params.id);
  try {
    res.send(foundShelter);
  } catch (error) {
    res.send("Error finding shelter data:", error);
  }
});

// get all cats of a specific shelter
router.get("/:id/cats", (req, res) => {
  const foundShelterCats = allCats.filter(
    (data) => data.shelterID === req.params.id
  );
  try {
    res.send(foundShelterCats);
  } catch (error) {
    res.send("Error finding shelter cats:", error);
  }
});

module.exports = router;
