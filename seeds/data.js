/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const shelterData = require("../seed_data/shelter");
const catData = require("../seed_data/cat");
const userData = require("../seed_data/user");
const catLikesData = require("../seed_data/catLikes");
const catRequestsData = require("../seed_data/catRequests");

exports.seed = function (knex) {
  return knex("shelter")
    .del()
    .then(function () {
      return knex("shelter").insert(shelterData);
    })
    .then(() => {
      return knex("cat").del();
    })
    .then(() => {
      return knex("cat").insert(catData);
    })
    .then(() => {
      return knex("user").del();
    })
    .then(() => {
      return knex("user").insert(userData);
    })
    .then(() => {
      return knex("catLikes").del();
    })
    .then(() => {
      return knex("catLikes").insert(catLikesData);
    })
    .then(() => {
      return knex("catRequests").del();
    })
    .then(() => {
      return knex("catRequests").insert(catRequestsData);
    });
};
