
const router = require("express").Router();
const { redirectUrl } = require("../controllers/redirectController");

router.get("/:code", redirectUrl);

module.exports = router;
