const router = require("express").Router();
const { transactionController } = require("../controllers");
const { validateToken } = require("../middleware/validations");

router.get("/", transactionController.getAllTransaction);
router.post("/", validateToken, transactionController.createTransaction,transactionController.midTransSample);

module.exports = router;
