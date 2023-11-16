const { pictureController } = require("../controllers");
const { uploader } = require("../middleware/multer");
const { validateToken } = require("../middleware/validations");

const router = require("express").Router();

router.get("/", validateToken, pictureController.getProfilePic);
router.patch(
  "/",
  validateToken,
  uploader("/profilepic").single("picture"),
  pictureController.uploadProfilePic
);
router.delete("/", validateToken, pictureController.deletePic);

module.exports = router;
