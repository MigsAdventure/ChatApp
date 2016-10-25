import { EventEmitter } from 'events';
import AppDispatcher from '../AppDispatcher';

let _allRooms = [];

class ChatStore extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register(action => {
      const { type, payload } = action;
      switch(type) {
        case 'GET_CHATROOMS':
        console.log('payLoad: ', payload)
          _allRooms = payload;
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
