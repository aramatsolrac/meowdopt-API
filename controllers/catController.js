const knex = require("knex")(require("../knexfile"));

exports.index = (_req, res) => {
  knex("cat")
    .select("shelter.city", "cat.*")
    .innerJoin("shelter", "shelter.id", "cat.shelter_id")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving Cats: ${err}`));
};

exports.show = (req, res) => {
  knex("cat")
    .select("shelter.name as shelter_name", "cat.*")
    .innerJoin("shelter", "shelter.id", "cat.shelter_id")
    .where("cat.id", req.params.id)
    .first()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving Cat: ${err}`));
};

exports.like = (req, res) => {
  console.log("Like");
  knex("catLikes")
    .insert({
      isLiked: true,
      user_id: req.body.userID,
      cat_id: req.body.catID,
    })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving Cat: ${err}`));
};

exports.removeLike = (req, res) => {
  knex("catLikes")
    .where({
      user_id: req.body.userID,
      cat_id: req.body.catID,
    })
    .del()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving Cat: ${err}`));
};
