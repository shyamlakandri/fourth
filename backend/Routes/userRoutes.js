const express = require("express");
const { createUser, loginUser } = require("../Controller/User");

const router = express.Router();


router.route("/create/user").post(createUser);
router.route("/login").post(loginUser);




module.exports = router;