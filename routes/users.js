const express = require("express");
const fs = require("fs");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");

const allUsers = JSON.parse(fs.readFileSync("./data/users.json", "utf-8"));

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

// // post a new user
router.post("/signup", (req, res) => {
  const userInput = {
    id: uuidv4(),
    name: req.body.name,
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
  };
  allUsers.push(userInput);
  fs.writeFile("./data/users.json", JSON.stringify(allUsers), () => {
    res.json({
      status: "User created",
      data: allUsers,
    });
  });
});

module.exports = router;
