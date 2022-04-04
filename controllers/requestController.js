const knex = require("knex")(require("../knexfile"));

exports.index = (_req, res) => {
  knex("catRequests")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving Requests: ${err}`));
};

exports.add = (req, res) => {
  knex("catRequests")
    .insert({
      user_id: req.body.userID,
      cat_id: req.body.catID,
      name: req.body.name,
      email: req.body.email,
    })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving Request: ${err}`));
};

exports.delete = (req, res) => {
  knex("catRequests")
    .where("id", req.params.id)
    .del()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving Request: ${err}`));
};
