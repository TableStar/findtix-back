const router = require("express").Router();
const { ticketController } = require("../controllers");

router.post("/create", ticketController.postTicket );

module.exports = router;