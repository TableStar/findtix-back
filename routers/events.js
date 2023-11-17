const router = require("express").Router();
const { eventsController } = require("../controllers")

router.get("/upcoming", eventsController.getUpcomingEvents);
router.get("/free", eventsController.getFreeEvents);

module.exports = router;