const router = require("express").Router();
const { forgottenController } = require("../controllers");
const { authsController } = require("../controllers");
const { validateToken, validatePass } = require("../middleware/validations");

router.post("/password", forgottenController.forgotPassword);
router.post(
  "/resetpass",
  validatePass,
  validateToken,
  authsController.changePass
);

module.exports = router;
