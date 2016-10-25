const express = require('express');
const router = express.Router();

const MessagesModel = require('../models/MessagesModel');

router.route('/')
.get((req, res) => {
  MessagesModel.find({}).populate('messages').exec()
    .then((message) => {
      res.send(message);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
})
.post((req, res) => {
  MessagesModel.create(req.body)
  .then((message) => {
    res.send(message);
  })
  .catch((err) => {
    res.status(400).send(err);
  });
});

router.route('/:id')
.get((req, res) => {
  MessagesModel.find({chatRoom: req.params.id}).populate('messages').exec()
  .then((message) => {
    res.status(200).send(message);
  })
  .catch((err) => {
    res.status(400).send(err);
  });
})
.post((req, res) => {
  MessagesModel.create(req.body)
  .then((message) => {
    res.send(message);
  })
  .catch((err) => {
    res.status(400).send(err);
  });
})
.put((req, res) => {
  MessagesModel.findByIdAndUpdate(req.params.id, { $set: req.body }, (err) => {
    res.status(err ? 400 : 200).send(err);
  });
})
.delete((req, res) => {
  MessagesModel.findByIdAndRemove(req.params.id)
  .then((message) => {
    res.status(200).send(`deleted:\n ${message}`);
  })
  .catch((err) => {
    res.status(400).send(err);
  });
});


module.exports = router;
