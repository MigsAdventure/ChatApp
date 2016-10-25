import axios from 'axios';
import ServerActions from './actions/ServerActions';

const API = {
  getAllRooms() {
    axios.get('/api/chatrooms')
    .then((res) => {
      // console.log('a;llrooms API:', res)
      ServerActions.receiveAllRooms(res);
    });
  },

  createNewRoom(input) {
    axios.post('/api/chatrooms', input)
    .then((res) => {
      console.log('(res) in neRoomInput: ', (res));
      API.getAllRooms();
    })
    .catch((err) => {
      console.log('err:', err);
    });
  },
};


export default API;
