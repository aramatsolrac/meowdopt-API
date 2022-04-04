const knex = require("knex")(require("../knexfile"));
const bcrypt = require("bcrypt");

exports.index = (_req, res) => {
  knex("user")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving User: ${err}`));
};

exports.show = (req, res) => {
  knex("user")
    .where("id", req.params.id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving User: ${err}`));
};

exports.favorites = (req, res) => {
  knex("catLikes")
    .select(
      "cat.name as cat_name",
      "cat.image",
      "user.name as user_name",
      "catLikes.*"
    )
    .innerJoin("cat", "cat.id", "catLikes.cat_id")
    .innerJoin("user", "user.id", "catLikes.user_id")
    .where("user_id", req.params.id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving User: ${err}`));
};

exports.requests = (req, res) => {
  knex("catRequests")
    .select("cat.name as cat_name", "cat.image", "catRequests.*")
    .innerJoin("cat", "cat.id", "catRequests.cat_id")
    .where("user_id", req.params.id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving User: ${err}`));
};

exports.signup = (req, res) => {
  bcrypt.hash(req.body.password, 10).then((hashedPassword) => {
    return knex("user")
      .insert({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
      })
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => res.status(400).send(`Error creating User: ${err}`));
  });
};
