const router = require("express").Router();
const { citiesController } = require("../controllers");

router.get("/", citiesController.getCities);

module.exports = router;