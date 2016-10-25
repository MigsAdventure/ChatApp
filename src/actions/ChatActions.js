import API from '../API';

const ChatActions = {
  createNewRoom(input) {
    API.createNewRoom(input);
  },

  getChatRooms() {
    API.getChatRooms();
  },

  deleteRoom(id) {
    API.deleteRoom(id);
  },

  openChatRoom(room) {
    API.openChatRoom(room);
  },

  sendMessage(msg) {
    API.sendMessage(msg);
  },

};
export default ChatActions;
