const express = require('express');
const router = express.Router();

const ChatRoomModel = require('../models/ChatRoomModel');

router.route('/')
.get((req, res) => {
  ChatRoomModel.find({}, (err, chatrooms) => {
    res.status(err ? 400 : 200).send(err || chatrooms);
  });
})
.post((req, res) => {
  ChatRoomModel.create(req.body)
  .then((chatRoom) => {
    res.send(chatRoom);
  })
  .catch((err) => {
    res.status(400).send(err);
  });
});

router.route('/:id')
.put((req, res) => {
  ChatRoomModel.findById(req.params.id)
  .then((chatRoom) => {
    return chatRoom.save();
  })
  .then((savedChatRoomModel) => {
    res.send(savedChatRoomModel);
  })
  .catch((err) => {
    res.status(400).send(err);
  });
});

module.exports = router;


// router.route('/:id')
//     .put((req, res) => {
//       ChatRoomModel.findByIdAndUpdate(req.params.id, { $set: req.body }, (err) => {
//         res.status(err ? 400 : 200).send(err);
//       });
//     });

// let chatRoom = new ChatRoomModel(req.body);
// chatRoom.save((err, savedChatRoomModel) => {
//   res.status(err ? 400 : 200).send(err || savedChatRoomModel);
// });
