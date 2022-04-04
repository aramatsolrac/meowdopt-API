const knex = require("knex")(require("../knexfile").development);

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
    .where("id", req.params.id)
    .first()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving Cat: ${err}`));
};

exports.like = (req, res) => {
  knex("catLikes")
    .insert({
      isLiked: true,
      user_id: req.body.user_id,
      cat_id: req.body.cat_id,
    })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving Cat: ${err}`));
};

exports.removeLike = (req, res) => {
  knex("catLikes")
    .where({
      user_id: req.body.user_id,
      cat_id: req.body.cat_id,
    })
    .del()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving Cat: ${err}`));
};
