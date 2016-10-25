import React, { Component } from 'react';
import InputForm from './InputForm';
import socket from '../socket-init';

export default class Layout extends Component {
  constructor() {
    super();
  }


  render() {
    return (
      <div className='container'>
        <h1 className='text-center'>Chat Room</h1>
        {this.props.children};
      </div>
    );
  }
}
