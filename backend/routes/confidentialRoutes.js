const express = require("express");
const route = express.Router();
const {
  receivers,
} = require("../controllers/confidentialController");

//import validator
// const { runValidation } = require("../validators");
// const {
//   userSignupValidator,
//   userSigninValidator,
// } = require("../validators/authValidator");

//pass on controllers
// route.post("/signin", userSigninValidator, runValidation, signin);
route.get("/receivers", receivers);

// test
// route.get("/secret", requireSignin, (req, res) => {
//   res.json({
//     user: req.user,
//   });
// });

module.exports = route;
