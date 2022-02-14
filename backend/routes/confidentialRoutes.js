const express = require("express");
const route = express.Router();
const {
  authMiddleware,
} = require("../controllers/authControllers");

//import validator
const { runValidation } = require("../validators");
const {
  cardValidator,
} = require("../validators/cardValidator");

const {
  receivers,
  uploadCard,
  cards,
  card,
  receiver,
  updateAmount,
  updateCardStatus,
  receiversWithCards
} = require("../controllers/confidentialController");

//pass on controllers
route.get("/receivers", receivers);
route.post("/uploadCard", cardValidator, runValidation, uploadCard);
route.post("/cards", cards);
route.post("/card", card);
route.post("/receiver", receiver);
route.post("/updateAmount", updateAmount);
route.post("/updateCardStatus", updateCardStatus);
route.get("/receiversWithCards", receiversWithCards);

module.exports = route;
