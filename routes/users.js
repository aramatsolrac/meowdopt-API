const express = require("express");
const fs = require("fs");
const router = express.Router();

// get all users
router.get("/", (req, res) => {
  fs.readFile("./data/users.json", "utf-8", (err, data) => {
    const allUsers = JSON.parse(data);
    if (err) {
      res.send("error reading users data");
    } else {
      res.send(allUsers);
    }
  });
});

// get a specific cat
router.get("/:id", (req, res) => {
  fs.readFile("./data/users.json", "utf-8", (err, data) => {
    const allUsers = JSON.parse(data);
    const foundUser = allUsers.find((data) => data.id === req.params.id);
    if (err) {
      res.send(err);
    } else {
      res.send(foundUser);
    }
  });
});

// get cats liked
router.get("/:id/favorites", (req, res) => {
  fs.readFile("./data/catsLikes.json", "utf-8", (err, data) => {
    const allCatsLikes = JSON.parse(data);
    const foundCatsLiked = allCatsLikes.filter(
      (data) => data.userID === req.params.id
    );
    console.log(foundCatsLiked);
    res.send(foundCatsLiked);
  });
});

// get requests send
router.get("/:id/requests", (req, res) => {
  fs.readFile("./data/catsRequests.json", "utf-8", (err, data) => {
    const allRequests = JSON.parse(data);
    const foundRequest = allRequests.filter(
      (data) => data.userID === req.params.id
    );
    console.log(foundRequest);
    res.send(foundRequest);
  });
});

module.exports = router;
