const express = require("express");
const fs = require("fs");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");

// get all shelters
router.get("/", (req, res) => {
  fs.readFile("./data/shelters.json", "utf-8", (err, data) => {
    const allShelters = JSON.parse(data);
    if (err) {
      res.send("error reading shelters data");
    } else {
      res.send(allShelters);
    }
  });
});

// get a specific shelters
router.get("/:id", (req, res) => {
  fs.readFile("./data/shelters.json", "utf-8", (err, data) => {
    const allShelters = JSON.parse(data);
    const foundShelter = allShelters.find((data) => data.id === req.params.id);
    if (err) {
      res.send(err);
    } else {
      res.send(foundCat);
    }
  });
});

// get all cats of a specific shelter
router.get("/:id/cats", (req, res) => {
  fs.readFile("./data/cats.json", "utf-8", (err, data) => {
    const allCats = JSON.parse(data);
    const foundShelterCats = allCats.filter(
      (data) => data.shelterID === req.params.id
    );
    console.log(foundShelterCats);
    res.send(foundShelterCats);
  });
});

module.exports = router;
