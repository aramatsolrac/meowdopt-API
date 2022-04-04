const router = require("express").Router();
const catController = require("../controllers/catController");

router.route("/").get(catController.index);
router.route("/:id").get(catController.show);
router.route("/:id/like").post(catController.like);
router.route("/:id/remove-like").delete(catController.removeLike);

module.exports = router;
