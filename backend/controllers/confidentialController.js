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
  Card.find({ 
    sender_id: req.body.sender_id, 
    receiver_id: req.body.receiver_id
  }).exec()
  .then(cards => {
    res.json({
      cards
    })
  })
  .catch(err => {
    console.log(err);
  })
};
