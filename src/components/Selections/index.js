import React, { Component } from 'react';
import './style.scss';

export class index extends Component {
  constructor(props) {
    super(props);
    this.state = { filter: 'none' };
    // this.setFilter = this.setFilter.bind(this);
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
          <button onClick={this.props.setFilterBass}>Bass</button>
          <button onClick={() => this.props.filterGuitar}>Guitar</button>
          <button onClick={() => this.props.filterDrums}>Drums</button>
        </span>
      </div>
    );
  }
}

export default index;
