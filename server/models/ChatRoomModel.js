const mongoose = require('mongoose');

const chatroomSchema = new mongoose.Schema({
  name: { type: String },
  messages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'MessagesModel' }],
  createdAt: { type: Date, default: Date.now },
});

const ChatRoomModel = mongoose.model('ChatRoomModel', chatroomSchema);

module.exports = ChatRoomModel;
