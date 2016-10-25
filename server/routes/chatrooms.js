const express = require('express');
const router = express.Router();

const ChatRoomModel = require('../models/ChatRoomModel');

router.route('/')
.get((req, res) => {
  ChatRoomModel.find({}).populate('messages').exec()
    .then((room) => {
      res.send(room);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
})
.post((req, res) => {
  ChatRoomModel.create(req.body)
  .then((room) => {
    res.send(room);
  })
  .catch((err) => {
    res.status(400).send(err);
  });
});

router.route('/:id')
.get((req, res) => {
  ChatRoomModel.findById(req.params.id).populate('messages').exec()
  .then((room) => {
    res.status(200).send(room);
  })
  .catch((err) => {
    res.status(400).send(err);
  });
})
.put((req, res) => {
  ChatRoomModel.findByIdAndUpdate(req.params.id, { $set: req.body }, (err) => {
    res.status(err ? 400 : 200).send(err);
  });
})
.delete((req, res) => {
  ChatRoomModel.findByIdAndRemove(req.params.id)
  .then((room) => {
    res.status(200).send(`deleted:\n ${room}`);
  })
  .catch((err) => {
    res.status(400).send(err);
  });
});


module.exports = router;
