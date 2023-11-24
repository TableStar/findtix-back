const router = require("express").Router();
const { transactionController } = require("../controllers");
const { validateToken } = require("../middleware/validations");

router.post("/", validateToken, transactionController.createTransaction);

module.exports = router;
