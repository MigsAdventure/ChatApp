import AppDispatcher from '../AppDispatcher';

const ServerActions = {
  receiveAllRooms(rooms) {
    AppDispatcher.dispatch({
      type: 'GET_CHATROOMS',
      payload: rooms,
    });
  },
};
export default ServerActions;
