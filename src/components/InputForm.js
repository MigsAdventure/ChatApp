import React, { Component } from 'react';

import ChatActions from '../actions/ChatActions';

export default class InputForm extends Component {
  constructor() {
    super();

    this._submitForm = this._submitForm.bind(this);
  }

  _submitForm(e) {
    e.preventDefault();
    const { roomInput } = this.refs;
    const input = roomInput.value;
    ChatActions.createNewRoom(input);
  }

  render() {
    return (
      <div>
        <form onSubmit={this._submitForm} className='form-inline'>
          <div className='form-group'>
            <input ref='roomInput' type="text" className="form-control text-center" placeholder="Create New Room"/>
          </div>
          <button type='submit' className='btn btn-primary'>Create new Room</button>
        </form>
      </div>
    );
  }
}
