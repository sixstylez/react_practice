import React, { Component } from 'react';
import './style.scss';

export class header extends Component {
  render() {
    return (
      <div className="header">
        <img
          src={require('../../static/musicStaff.png')}
          alt="music staff"
          id="backgroundImage"
        />
        <img
          src={require('../../static/logo_transparent.png')}
          alt="logo"
          id="logo"
        />
      </div>
    );
  }
}

export default header;
