const express = require("express");
const router = express.Router();
const sendSPA = require("../controllers/app");
const authCtrl = require("../controllers/auth");

router.get("*", sendSPA.get);

router.post("/api/saveNewUser", authCtrl.createUser);

module.exports = router;
