import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';
import './style.scss';
import Slideshow1 from '../../static/slideshow/slideshow_1.jpg';
import Slideshow2 from '../../static/slideshow/slideshow_2.jpg';
import Slideshow3 from '../../static/slideshow/slideshow_3.jpg';
import Slideshow4 from '../../static/slideshow/slideshow_4.jpg';
import Slideshow5 from '../../static/slideshow/slideshow_5.jpg';
import MainPrompt from '../MainPrompt';
import Selections from '../Selections';
import '../Slideshow';

export class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selections: false
    };
    this.handler = this.handler.bind(this);
  }
  //handle get started button
  handler() {
    this.setState({
      selections: !this.state.selections
    });
  }
  // has to be in the direct parent to Slideshow
  setFilter = filter => {
    console.log('console: selected filter in SlideShow is' + filter);
    this.props.setFilterApp(filter);
  };
  render() {
    const properties = {
      duration: 5000,
      transitionDuration: 500,
      infinite: true,
      indicators: false,
      arrows: true
    };
    const { selections } = this.state;

    return (
      <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${Slideshow1})` }} />
          </div>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${Slideshow2})` }} />
          </div>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${Slideshow3})` }} />
          </div>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${Slideshow4})` }} />
          </div>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${Slideshow5})` }} />
          </div>
        </Slide>
        <div className="prompt">
          {!selections && <MainPrompt handler={this.handler} />}
          {selections && <Selections setFilter={this.setFilter} />}
        </div>
      </div>
    );
  }
}

export default index;
