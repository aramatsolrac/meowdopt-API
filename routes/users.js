const express = require("express");
const fs = require("fs");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const dataHelper = require("../helpers/dataHelper");

// get all users
router.get("/", (req, res) => {
  try {
    const allUsers = dataHelper.getAllUsers();
    res.send(allUsers);
  } catch (error) {
    res.send("Error reading users data:", error);
  }
});

// get a specific user
router.get("/:id", (req, res) => {
  const foundUser = dataHelper
    .getAllUsers()
    .find((data) => data.id === req.params.id);
  try {
    res.send(foundUser);
  } catch (error) {
    res.send("Error finding user data:", error);
  }
});

// get cats liked
router.get("/:id/favorites", (req, res) => {
  const foundCatsLiked = dataHelper
    .getAllLikes()
    .filter((data) => data.userID === req.params.id);
  const foundCatsLikedWithDetails = foundCatsLiked.map((catLike) => {
    const foundCat = dataHelper
      .getAllCats()
      .find((data) => data.id === catLike.catID);
    const foundUser = dataHelper
      .getAllUsers()
      .find((data) => data.id === catLike.userID);

    return {
      ...catLike,
      catName: foundCat.catName,
      image: foundCat.image,
      userName: foundUser.name,
    };
  });
  console.log(foundCatsLikedWithDetails);
  res.send(foundCatsLikedWithDetails);
});

// get requests send
router.get("/:id/requests", (req, res) => {
  const foundRequest = dataHelper
    .getAllRequests()
    .filter((data) => data.userID === req.params.id);
  const foundCatsLikedWithDetails = foundRequest.map((catRequest) => {
    const foundCat = dataHelper
      .getAllCats()
      .find((data) => data.id === catRequest.catID);
    return {
      ...catRequest,
      catName: foundCat.catName,
      image: foundCat.image,
    };
  });
  res.send(foundCatsLikedWithDetails);
});

// // post a new user
router.post("/signup", (req, res) => {
  const userInput = {
    id: uuidv4(),
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  };
  const allUsers = dataHelper.getAllUsers();
  allUsers.push(userInput);
  fs.writeFile("./data/users.json", JSON.stringify(allUsers), () => {
    res.json({
      status: "User created",
      data: allUsers,
    });
  });
});

module.exports = router;
