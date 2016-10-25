import AppDispatcher from '../AppDispatcher';

const ServerActions = {
  receiveAllRooms(rooms) {
    AppDispatcher.dispatch({
      type: 'GET_CHATROOMS',
      payload: rooms,
    });
  },

  receiveCurrRoom(room) {
    AppDispatcher.dispatch({
      type: 'GET_CURR_ROOM',
      payload: room,
    });
  },
};
export default ServerActions;
