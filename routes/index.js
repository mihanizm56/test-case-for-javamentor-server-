const express = require("express");
const router = express.Router();
const langsCtrl = require("../controllers/langs");

router.get("/api/language", langsCtrl.get);
router.post("/api/language", langsCtrl.post);

module.exports = router;
