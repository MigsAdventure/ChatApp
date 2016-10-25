import React, { Component } from 'react';

import InputForm from './InputForm';
import ChatRooms from './ChatRooms';

export default class MainPage extends Component {

  render() {
    return (
      <div>
        <h1>Create A Room</h1>
        <div className='row'>
          <InputForm />
        </div>
        <div className='row'>
          <ChatRooms />
        </div>
      </div>
    );
  }
}
