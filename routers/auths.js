const router = require("express").Router();
const { authsController } = require("../controllers");
const { uploader } = require("../middleware/multer");
const {
  validateReg,
  validateToken,
  validateOldPass,
  validatePass,
  tokenAffirmation,
} = require("../middleware/validations");

router.post("/register", validateReg, authsController.register);
router.post("/login", authsController.login);
router.get("/checktoken", validateToken, tokenAffirmation);
router.get("/keeplogin", validateToken, authsController.keepLogin);
router.get("/users", validateToken, authsController.getUserProps);
router.patch(
  "/editpass",
  validateToken,
  validateOldPass,
  validatePass,
  authsController.changePass
);
router.patch("/verifyemail", validateToken, authsController.changeVerified);
router.patch("/editauths", validateToken, authsController.editAuths);
router.patch("/edituserprops", validateToken, authsController.editUserProps);
router.get("/getall", authsController.getAllUserProps);
router.patch(
  "/changepass",
  validatePass,
  validateToken,
  validateOldPass,
  authsController.changePass
);

module.exports = router;
