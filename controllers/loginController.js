const knex = require("knex")(require("../knexfile").development);

exports.login = (req, res) => {
  knex("user")
    .where("username", req.body.username)
    .then((data) => {
      if (!data.length) {
        res.status(404).send("User not found");
        return;
      }

      if (data[0].password === req.body.password) {
        res
          .status(200)
          .send({ user: JSON.stringify(data[0]), message: "Success" });
      } else {
        res.status(401).send("Password invalid");
      }
    })
    .catch((err) => res.status(400).send(`Error retrieving Cat: ${err}`));
};
