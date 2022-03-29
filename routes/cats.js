const express = require("express");
const fs = require("fs");
const router = express.Router();
const dataHelper = require("../helpers/dataHelper");

// get all cats
router.get("/", (req, res) => {
  try {
    const allCatsWithCity = dataHelper.getAllCats().map((cat) => {
      const foundShelter = dataHelper
        .getAllShelters()
        .find((data) => data.id === cat.shelterID);
      return {
        ...cat,
        city: foundShelter.city,
      };
    });
    res.send(allCatsWithCity);
  } catch (error) {
    res.send("Error reading cats data:", error);
  }
});

// get a specific cat
router.get("/:id", (req, res) => {
  const foundCat = dataHelper
    .getAllCats()
    .find((data) => data.id === req.params.id);
  try {
    res.send(foundCat);
  } catch (error) {
    res.send("Error finding cat data:", error);
  }
});

// add like
router.post("/:id/like", (req, res) => {
  const userInput = {
    isLiked: true,
    userID: req.body.userID,
    catID: req.body.catID,
  };

  const allLikes = dataHelper.getAllLikes();
  allLikes.push(userInput);

  fs.writeFile("./data/catsLikes.json", JSON.stringify(allLikes), () => {
    res.json({
      status: "liked",
      data: allLikes,
    });
  });
});

// remove like
router.delete("/:id/remove-like", (req, res) => {
  const newCatsLikes = dataHelper
    .getAllLikes()
    .filter((like) => like.catID !== req.params.id);
  fs.writeFile("./data/catsLikes.json", JSON.stringify(newCatsLikes), () => {
    res.json({
      status: "like removed",
      data: newCatsLikes,
    });
  });
});

module.exports = router;
