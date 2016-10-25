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

};


export default API;
