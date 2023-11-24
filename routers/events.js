const router = require("express").Router();
const { eventsController } = require("../controllers")
const {uploader} = require("../middleware/multer");
router.get("/upcoming", eventsController.getUpcomingEvents);
router.get("/free", eventsController.getFreeEvents);
router.post("/create", uploader("/events").single("fileupload"), eventsController.postEvent)

module.exports = router;