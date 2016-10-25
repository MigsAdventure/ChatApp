const express = require('express');
const router = express.Router();

const MessagesModel = require('../models/MessagesModel');

router.route('/')
  .get((req, res) => {
    MessagesModel.find({}, (err, messages) => {
      
      res.status(err ? 400 : 200).send(err || messages);
    });
  })
  .post((req, res) => {
    console.log('body: ', req.body)
    MessagesModel.create(req.body)
      .then((message) => {
        res.send(message);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  });

router.route('/:id')
    .put((req, res) => {
      MessagesModel.findById(req.params.id)
        .then((message) => {
          return message.save();
        })
        .then((savedMessagesModel) => {
          res.send(savedMessagesModel);
        })
      .catch((err) => {
        res.status(400).send(err);
      });
    });

module.exports = router;


// router.route('/:id')
//     .put((req, res) => {
//       MessagesModel.findByIdAndUpdate(req.params.id, { $set: req.body }, (err) => {
//         res.status(err ? 400 : 200).send(err);
//       });
//     });

// let message = new MessagesModel(req.body);
// message.save((err, savedMessagesModel) => {
//   res.status(err ? 400 : 200).send(err || savedMessagesModel);
// });
