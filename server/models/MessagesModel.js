const mongoose = require('mongoose');

const messagesSchema = new mongoose.Schema({
  userName: { type: String },
  message: { type: String },
  chatRoom: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const MessagesModel = mongoose.model('MessagesModel', messagesSchema);

module.exports = MessagesModel;
