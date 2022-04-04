// const express = require("express");
// const fs = require("fs");
// const router = express.Router();
// const { v4: uuidv4 } = require("uuid");
// const dataHelper = require("../helpers/dataHelper");
const router = require("express").Router();
const requestController = require("../controllers/requestController");

router.route("/").get(requestController.index);
router.route("/:id/form").post(requestController.add);
router.route("/:id/delete").delete(requestController.delete);

// get all cat requests
// router.get("/", (req, res) => {
//   try {
//     const allRequests = dataHelper.getAllRequests();
//     res.send(allRequests);
//   } catch (error) {
//     res.send("Error reading shelters data", error);
//   }
// });

// post a new cat request
// router.post("/:id/form", (req, res) => {
//   const userInput = {
//     id: uuidv4(),
//     catID: req.body.catID,
//     userID: req.body.userID,
//     name: req.body.name,
//     email: req.body.email,
//     status: "Received",
//   };
//   const allRequests = dataHelper.getAllRequests();
//   allRequests.push(userInput);

//   fs.writeFile("./data/catsRequests.json", JSON.stringify(allRequests), () => {
//     res.json({
//       status: "created",
//       data: allRequests,
//     });
//   });
// });

// delete request
// router.delete("/:id/delete", (req, res) => {
//   const newRequests = dataHelper
//     .getAllRequests()
//     .filter((request) => request.id !== req.params.id);
//   console.log(newRequests);
//   fs.writeFile("./data/catsRequests.json", JSON.stringify(newRequests), () => {
//     res.json({
//       status: "Request removed",
//       data: newRequests,
//     });
//   });
// });

module.exports = router;
