const User = require("../models/user");
// const Sender = require("../models/sender");
const Receiver = require("../models/receiver");
const Card = require("../models/card");

exports.receivers = (req, res) => {
  Receiver.aggregate([
    {
      $lookup:
      {
          from: 'users',
          localField: 'user_id',
          foreignField: '_id',
          as: 'user'
      }
    }
  ])
  .then(receivers => {
    res.json({
      receivers
    });
  })
  .catch(err => {
    console.log(err);
  })
};

exports.uploadCard = (req, res) => {
  const newCard = new Card(req.body);
  newCard.save()
  .then(savedCard => {
    res.json({
      savedCard
    })
  })
  .catch(err => {
    console.log(err);
  })
};

exports.cards = (req, res) => {
  Card.find(req.body).exec()
  .then(cards => {
    res.json({
      cards
    })
  })
  .catch(err => {
    console.log(err);
  })
};

exports.card = (req, res) => {
  Card.findOne(
    {_id: req.body.card_id}
  ).exec()
  .then(card => {
    res.json({
      card
    })
  })
  .catch(err => {
    console.log(err);
  })
};

exports.receiver = (req, res) => {
  Receiver.findOne(
    {user_id: req.body.receiver_id}
  ).exec()
  .then(receiver => {
    res.json({
      receiver
    })
  })
  .catch(err => {
    console.log(err);
  })
};

exports.updateAmount = (req, res) => {
  Receiver.updateOne(
    {user_id: req.body.receiver_id},
    {amount: req.body.amount}
  ).exec()
  .then(result => {
    res.json({
      result
    })
  })
  .catch(err => {
    console.log(err);
  })
};

exports.updateCardStatus = (req, res) => {
  Card.updateOne(
    {_id: req.body.card_id},
    {status: req.body.status}
  ).exec()
  .then(result => {
    res.json({
      result
    })
  })
  .catch(err => {
    console.log(err);
  })
};
