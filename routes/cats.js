const express = require("express");
const fs = require("fs");
const router = express.Router();

//cats routes
const allCats = JSON.parse(fs.readFileSync("./data/cats.json", "utf-8"));
const allLikes = JSON.parse(fs.readFileSync("./data/catsLikes.json", "utf-8"));

// get all cats
router.get("/", (req, res) => {
  try {
    res.send(allCats);
  } catch (error) {
    res.send("Error reading cats data:", error);
  }
});

// get a specific cat
router.get("/:id", (req, res) => {
  const foundCat = allCats.find((data) => data.id === req.params.id);
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
  console.log(userInput);
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
  const newCatsLikes = allLikes.filter((like) => like.catID !== req.params.id);
  fs.writeFile("./data/catsLikes.json", JSON.stringify(newCatsLikes), () => {
    res.json({
      status: "like removed",
      data: newCatsLikes,
    });
  });
});

module.exports = router;
