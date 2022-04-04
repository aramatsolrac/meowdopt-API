const router = require("express").Router();
const userController = require("../controllers/userController");

router.route("/").get(userController.index);
router.route("/:id").get(userController.show);
router.route("/:id/favorites").get(userController.favorites);
router.route("/:id/requests").get(userController.requests);
router.route("/signup").post(userController.signup);

module.exports = router;
