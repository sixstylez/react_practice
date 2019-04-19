import React, { Component } from 'react';
import Selections from '../Selections';

export class index extends Component {
  constructor(props) {
    super(props);
    this.state = { showSelections: false };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      showSelections: true
    }));
  }

  render() {
    return (
      <div className="textContainer">
        <h2>Customized Selections</h2>
        <p>
          At Just 4 You Music we can curate a selection just for you based on
          your musical instrument of choice. Click below to begin!
        </p>
        <button onClick={this.props.handler}>
          GET STARTED &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; >
        </button>
      </div>
    );
  }
}

export default index;
