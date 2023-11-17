const router = require("express").Router();
const {categoriesController} = require("../controllers");

router.get("/", categoriesController.getCategories);

module.exports = router;