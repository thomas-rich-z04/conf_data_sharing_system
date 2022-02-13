const User = require("../models/user");
// const Sender = require("../models/sender");
const Receiver = require("../models/receiver");
const Card = require("../models/card");

// exports.upload = (req, res) => {
//   res.clearCookie("token");
//   res.json({
//     message: "Signout success",
//   });
// };

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
    console.log("---------");
    console.log(receivers[0].user);
  })
  .catch(err => {
    console.log(err);
  })
};
