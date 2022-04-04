// const express = require("express");
// const fs = require("fs");
// const router = express.Router();
// const { v4: uuidv4 } = require("uuid");
// const dataHelper = require("../helpers/dataHelper");
const router = require("express").Router();
const shelterController = require("../controllers/shelterController");

router.route("/").get(shelterController.index);
router.route("/:id").get(shelterController.show);
router.route("/:id/cats").get(shelterController.cats);
// get all shelters
// router.get("/", (req, res) => {
//   try {
//     const allShelters = dataHelper.getAllShelters();
//     res.send(allShelters);
//   } catch (error) {
//     res.send("Error reading shelters data", error);
//   }
// });

// get a specific shelters
// router.get("/:id", (req, res) => {
//   const foundShelter = dataHelper
//     .getAllShelters()
//     .find((data) => data.id === req.params.id);
//   try {
//     res.send(foundShelter);
//   } catch (error) {
//     res.send("Error finding shelter data:", error);
//   }
// });

// get all cats of a specific shelter
// router.get("/:id/cats", (req, res) => {
//   const foundShelterCats = dataHelper
//     .getAllCats()
//     .filter((data) => data.shelterID === req.params.id);
//   try {
//     res.send(foundShelterCats);
//   } catch (error) {
//     res.send("Error finding shelter cats:", error);
//   }
// });

// get all cats of a specific city
// router.get("/city", (req, res) => {
//   const foundCity = allCats.filter((data) => data.shelterID === req.params.id);
//   try {
//     res.send(foundCity);
//   } catch (error) {
//     res.send("Error finding cats of a city:", error);
//   }
// });

module.exports = router;
