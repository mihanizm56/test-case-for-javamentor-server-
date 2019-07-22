const express = require("express");
const router = express.Router();
const langsCtrl = require("../controllers/langs");

router.get("/api/languages", langsCtrl.get);
router.post("/api/languages", langsCtrl.post);

module.exports = router;
