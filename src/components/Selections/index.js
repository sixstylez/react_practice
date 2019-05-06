import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

export class index extends Component {
  constructor(props) {
    super(props);
    this.state = { filter: 'none' };
    //this.setFilter = this.setFilter.bind(this);
    //console.log('this state is ' + this.state);
  }

  //setFilter(f) {
  //  this.setState(state => ({
  //    filter: f
  //   }));
  //   console.log(this.state);
  // }

  render() {
    return (
      <div className="textContainer">
        <h2>Please Select Your Instrument</h2>
        <span>
          <NavLink exact to="../Shelf">
            <button onClick={() => this.props.setFilter('bass')}>Bass</button>
          </NavLink>
          <NavLink exact to="../Shelf">
            <button onClick={() => this.props.setFilter('guitar')}>
              Guitar
            </button>
          </NavLink>
          <NavLink exact to="../Shelf">
            <button onClick={() => this.props.setFilter('drums')}>Drums</button>
          </NavLink>
        </span>
      </div>
    );
  }
}

export default index;
