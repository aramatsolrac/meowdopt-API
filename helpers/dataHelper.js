const fs = require("fs");

function getAllCats() {
  return JSON.parse(fs.readFileSync("./data/cats.json", "utf-8"));
}

function getAllLikes() {
  return JSON.parse(fs.readFileSync("./data/catsLikes.json", "utf-8"));
}

function getAllShelters() {
  return JSON.parse(fs.readFileSync("./data/shelters.json", "utf-8"));
}

function getAllRequests() {
  return JSON.parse(fs.readFileSync("./data/catsRequests.json", "utf-8"));
}

function getAllUsers() {
  return JSON.parse(fs.readFileSync("./data/users.json", "utf-8"));
}

module.exports = {
  getAllLikes,
  getAllCats,
  getAllShelters,
  getAllRequests,
  getAllUsers,
};
