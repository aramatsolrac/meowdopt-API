const express = require("express");
const fs = require("fs");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");

//cats routes

// get all cats
router.get("/", (req, res) => {
  fs.readFile("./data/cats.json", "utf-8", (err, data) => {
    const allCats = JSON.parse(data);
    if (err) {
      res.send("error reading cats data");
    } else {
      res.send(allCats);
    }
  });
});

// get a specific cat
router.get("/:id", (req, res) => {
  fs.readFile("./data/cats.json", "utf-8", (err, data) => {
    const allCats = JSON.parse(data);
    const foundCat = allCats.find((data) => data.id === req.params.id);
    if (err) {
      res.send(err);
    } else {
      res.send(foundCat);
    }
  });
});

module.exports = router;
