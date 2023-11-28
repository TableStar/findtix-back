const router = require("express").Router();
const { transactionController } = require("../controllers");
const { validateToken } = require("../middleware/validations");

router.get("/", validateToken, transactionController.getAllTransaction);
router.post(
  "/",
  validateToken,
  transactionController.createTransaction,
  transactionController.midTransSample
);
router.patch("/status/:inv",transactionController.editStatus)

module.exports = router;
