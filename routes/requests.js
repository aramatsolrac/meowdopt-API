const router = require("express").Router();
const requestController = require("../controllers/requestController");

router.route("/").get(requestController.index);
router.route("/:id/form").post(requestController.add);
router.route("/:id/delete").delete(requestController.delete);

module.exports = router;
