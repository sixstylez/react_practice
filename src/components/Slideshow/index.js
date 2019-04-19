import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';
import './style.scss';
import Slideshow1 from '../../static/slideshow/slideshow_1.jpg';
import Slideshow2 from '../../static/slideshow/slideshow_2.jpg';
import Slideshow3 from '../../static/slideshow/slideshow_3.jpg';
import Slideshow4 from '../../static/slideshow/slideshow_4.jpg';
import Slideshow5 from '../../static/slideshow/slideshow_5.jpg';
import MainPrompt from '../MainPrompt';

export class index extends Component {
  render() {
    const properties = {
      duration: 5000,
      transitionDuration: 500,
      infinite: true,
      indicators: false,
      arrows: true
    };

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
        <MainPrompt />
      </div>
    );
  }
}

export default index;
