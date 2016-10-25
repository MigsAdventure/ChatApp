import React, {Component} from 'react';
import { browserHistory } from 'react-router';

import ChatActions from '../actions/ChatActions'
import ChatStore from '../stores/ChatStore';

export default class ChatRooms extends Component {
  constructor() {
    super();

    this._onChange = this._onChange.bind(this);
    this.deleteRoom = this.deleteRoom.bind(this);
    this.openChatRoom = this.openChatRoom.bind(this);
    this.state = {
      results: ChatStore.getChatRooms(),
    }
  }

  componentWillMount() {
    ChatActions.getChatRooms();
    ChatStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    ChatStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({
      results: ChatStore.getChatRooms(),
    });
  }

  openChatRoom(room) {
    browserHistory.push(`/chatrooms/${room._id}`);
    ChatActions.openChatRoom(room);
  }

  deleteRoom(id) {
    console.log('id: ', id)
    ChatActions.deleteRoom(id);
  }

  render() {
    const { results } = this.state;
    return (
      <div>
        <h2>All Rooms</h2>
        <div>
          {
            results.map((room, i) => (
              <div key={i} onClick={() => this.openChatRoom(room)} >
                <h2>Room: {i}</h2>
                <h2>{room.name}</h2>
                <button className='btn btn-danger' onClick={this.deleteRoom.bind(null, room._id)}>Delete</button>
              </div>
            ))
          }
        </div>
      </div>
    );
  }

}
