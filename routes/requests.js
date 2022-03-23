const express = require("express");
const fs = require("fs");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");

const allRequests = JSON.parse(
  fs.readFileSync("./data/catsRequests.json", "utf-8")
);

// get all cat requests
router.get("/", (req, res) => {
  try {
    res.send(allRequests);
  } catch (error) {
    res.send("Error reading shelters data", error);
  }
});

// post a new cat request
router.post("/:id/form", (req, res) => {
  const userInput = {
    id: uuidv4(),
    catID: req.body.catID,
    userID: req.body.userID,
    name: req.body.name,
    address: req.body.address,
    city: req.body.city,
    country: req.body.country,
    phone: req.body.phone,
    email: req.body.email,
    status: "Received",
  };
  allRequests.push(userInput);
  fs.writeFile("./data/catsRequests.json", JSON.stringify(allRequests), () => {
    res.json({
      status: "created",
      data: allRequests,
    });
  });
});

module.exports = router;
