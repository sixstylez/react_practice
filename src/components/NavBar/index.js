import React, { Component } from 'react';
import './style.scss';
import { Route, NavLink, HashRouter } from 'react-router-dom';

export class index extends Component {
  render() {
    return (
      <div className="navBar">
        <ul>
          <li>
            <NavLink exact to="/">
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink exact to="../Shelf">
              CATALOG
            </NavLink>
          </li>
          <li>
            <NavLink exact to="../About">
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink exact to="../Contact">
              CONTACT
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default index;
