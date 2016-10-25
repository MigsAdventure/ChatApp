import React, {Component} from 'react';
import { browserHistory } from 'react-router';

import ChatActions from '../actions/ChatActions'
import ChatStore from '../stores/ChatStore';

export default class ChatRooms extends Component {
  constructor() {
    super();

    this._onChange = this._onChange.bind(this);
    this.state = {
      results: ChatStore.getChatRooms(),
    }
  }

  componentWillMount() {
    ChatStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    ChatStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({
      results: ChatStore.getSearchResults(),
    });
  }

  openChatRoom(room) {
    // ChatActions.openChatRoom(room);
    // browserHistory.push(`/chatrooms/${room.id}`);
  }

  render() {
    const { results } = this.state;

    return (
      <div>
        <h1>chatrooms!!!</h1>

        {/* {
          results.map((room, i) => (
          <div key={i} onClick={() => this.openChatRoom(room)} >Room: {i}</div>

          ))
        } */}
      </div>
    )
  }

}
