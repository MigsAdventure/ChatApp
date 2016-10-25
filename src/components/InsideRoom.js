import React, {Component} from 'react';
import { browserHistory } from 'react-router';

import ChatActions from '../actions/ChatActions'
import ChatStore from '../stores/ChatStore';

export default class InsideRoom extends Component {
  constructor() {
    super();

    this._onChange = this._onChange.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.state = {
      room: ChatStore.getCurrentRoom(),
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
      room: ChatStore.getCurrentRoom(),
    });
  }

  sendMessage(room) {
    const { messageInput } = this.refs;
    let message = {
      message: messageInput.value,
      chatRoom: room._id,
    }
    ChatActions.sendMessage(message);
  }

  render() {
    const { room } = this.state;
    console.log('inside: ', room)
    return (
      <div>
        <h1>{room.name}</h1>
        {
          room.messages.map((msg) => {
            <div>
              <h4>{msg.userName}</h4>
              <p>{msg.content}</p>
            </div>
          })
        }
        <input ref='messageInput' type="text"/>
        <button classname='btn btn-primary' onClick={()=>this.sendMessage(room)}>Send</button>
      </div>
    );
  }

}
