const { eventsController } = require("../controllers");
const {uploader} = require("../middleware/multer");
const router = require("express").Router();



router.post("/create", uploader("/events").single("fileupload"), eventsController.postEvent)

module.exports = router;