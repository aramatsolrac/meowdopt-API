const router = require("express").Router();
const shelterController = require("../controllers/shelterController");

router.route("/").get(shelterController.index);
router.route("/:id").get(shelterController.show);
router.route("/:id/cats").get(shelterController.cats);

module.exports = router;
