const router = require("express").Router();
const { postsController } = require("../controllers");
const { uploader } = require("../middleware/multer");
const { validateToken } = require("../middleware/validations");
router.post("/posting", validateToken, postsController.createPost);
router.post(
  "/postwithpic",
  validateToken,
  uploader("/profilepic").array("pictures", 3),
  postsController.createPost
);

module.exports = router;
