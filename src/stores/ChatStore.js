import { EventEmitter } from 'events';
import AppDispatcher from '../AppDispatcher'

let _allRooms = [];

class ChatStore extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register(action => {
      let { type, payload } = action;
      switch(action) {
        case 'GET_CHATROOMS':
          _allRooms = action.payload.rooms;
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
}

export default new ChatStore();
