const { check } = require("express-validator");

const isNumberValid = ( value ) => {
  return /^(9806|9808)([0-9]{19})$/.test(value);
}

const isPinValid = ( value ) => {
  return /^([0-9]{4})$/.test(value);
}

const isAmountValid = ( value ) => {
  return value > 0 && value <= 500;
}

exports.cardValidator = [
  check("number").not().isEmpty().withMessage("Number is required").bail().custom(isNumberValid).withMessage("Card number must start with 9808 or 9806 and have 23 digits"),
  check("pin").not().isEmpty().withMessage("PIN is required").bail().custom(isPinValid).withMessage("PIN must have 4 digits"),
  check("amount").custom(isAmountValid).withMessage("Amount must be between $0 and $500"),
];
