const router = require("express").Router();
const { promotorController } = require("../controllers");

router.get("/", promotorController.getPromotors);
router.get("/:id", promotorController.getPromotors);

module.exports = router;