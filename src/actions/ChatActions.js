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

};
export default ChatActions;
