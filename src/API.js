import axios from 'axios';
import ServerActions from './actions/ServerActions';

const API = {
  getChatRooms() {
    axios.get('/api/chatrooms')
    .then((res) => {
      ServerActions.receiveAllRooms(res.data);
    });
  },

  createNewRoom(input) {
    axios.post('/api/chatrooms', {name:input})
    .then((res) => {
      console.log('(res) in neRoomInput: ', (res));
      API.getChatRooms();
    })
    .catch((err) => {
      console.log('err:', err);
    });
  },

  deleteRoom(id) {
    axios.delete(`/api/chatrooms/${id}`)
      .then((res) => {

        API.getChatRooms();
      })
      .catch((err) => {
        console.log('err: ', err);
      });
  },

  openChatRoom(room) {
    ServerActions.receiveCurrRoom(room);
  },

  sendMessage(msg) {
    console.log(msg);
    axios.post('/api/messages', msg)
      .then((res) => {
        console.log('res msg: ', res);
      });
    axios.get(`/api/messages/${msg.chatRoom}`)
      .then((res) => {
        console.log('getId Res: ', res);
      });
  },

};


export default API;
