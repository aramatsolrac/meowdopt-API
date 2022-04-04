const knex = require("knex")(require("../knexfile"));
const bcrypt = require("bcrypt");

exports.login = (req, res) => {
  knex("user")
    .where("username", req.body.username)
    .then((data) => {
      if (!data.length) {
        res.status(404).send("User not found");
        return;
      } else {
        return bcrypt
          .compare(req.body.password, data[0].password)
          .then((isAuthenticated) => {
            if (!isAuthenticated) {
              res.status(401).json({
                error: "Unauthorized Access!",
              });
            } else {
              res
                .status(200)
                .send({ user: JSON.stringify(data[0]), message: "Success" });
            }
          })
          .catch((err) => res.status(400).send(`Error retrieving Cat: ${err}`));
      }
    });
};
