const mongoose = require('mongoose');

const chatroomSchema = new mongoose.Schema({
  name: { type: String },
  messages: { type: Array },
  createdAt: { type: Date, default: Date.now },
});

const ChatRoomModel = mongoose.model('ChatRoomModel', chatroomSchema);

module.exports = ChatRoomModel;
