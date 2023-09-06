const express = require("express");
const router = express();
const { body, validationResult } = require("express-validator");

router.post(
  "signup",
  body("email").isEmail(),
  body("password").isLength({ min: 6 })

  // body("email").isEmail(),
  // body("password").isLength({ min: 5 }),
  // userController.login
);
module.exports = router;
