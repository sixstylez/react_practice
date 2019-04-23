import React, { Component } from 'react';
import './style.scss';

export class index extends Component {
  constructor(props) {
    super(props);
    this.state = { filter: 'none' };
    //this.setFilter = this.setFilter.bind(this);
    console.log('this is' + this);
  }

  // setFilter(f) {
  //   this.setState(state => ({
  //     filter: f
  //   }));
  //   console.log(this.state);
  // }

  render() {
    return (
      <div className="textContainer">
        <h2>Please Select Your Instrument</h2>
        <span>
          <button onClick={() => this.props.setFilter('bass')}>Bass</button>
          <button onClick={() => this.props.setFilter('guitar')}>Guitar</button>
          <button onClick={() => this.props.setFilter('drums')}>Drums</button>
        </span>
      </div>
    );
  }
}

export default index;
