import { EventEmitter } from 'events';
import AppDispatcher from '../AppDispatcher';

let _allRooms = [];
let _currRoom = [];

class ChatStore extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register(action => {
      const { type, payload } = action;
      switch(type) {
        case 'GET_CHATROOMS':
          _allRooms = payload;
          this.emit('CHANGE');
          break;

        case 'GET_CURR_ROOM':
          console.log('currROom: ', payload);
          _currRoom = payload;
          this.emit('CHANGE');
          break;
      }
    })
  }

  startListening(cb) {
    this.on('CHANGE', cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb);
  }

  getChatRooms() {
    return _allRooms;
  }

  getCurrentRoom() {
    return _currRoom;
  }
}

export default new ChatStore();
