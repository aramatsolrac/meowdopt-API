const express = require("express");
const fs = require("fs");
const router = express.Router();

router.post("/", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  fs.readFile("./data/users.json", "utf-8", (err, data) => {
    const allUsers = JSON.parse(data);

    if (err) {
      res.status(500).send("Error reading users data");
    } else {
      const foundUser = allUsers.find((data) => data.username === username);

      if (!foundUser) {
        res.status(404).send("User not found");
        return;
      }

      if (foundUser.password === password) {
        res
          .status(200)
          .send({ user: JSON.stringify(foundUser), message: "Success" });
      } else {
        res.status(401).send("Password invalid");
      }
    }
  });
});

module.exports = router;
