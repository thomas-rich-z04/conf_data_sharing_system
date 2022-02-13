const express = require("express");
const route = express.Router();
const {
  authMiddleware,
} = require("../controllers/authControllers");

const {
  receivers,
  uploadCard,
  cards
} = require("../controllers/confidentialController");

//pass on controllers
route.get("/receivers", receivers);
route.post("/uploadCard", uploadCard);
route.post("/cards", cards);

module.exports = route;
