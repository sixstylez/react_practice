import React, { Component } from 'react';

import Shelf from '../Shelf';
import Filter from '../Shelf/Filter';
import GithubCorner from '../github/Corner';
import FloatCart from '../FloatCart';
import Header from '../Header/header.js';
import NavBar from '../NavBar';
import Slideshow from '../Slideshow';
import Footer from '../Footer';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import About from '../About';
import Contact from '../Contact';

class App extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      filter: 'none'
    };
  }

  setFilterBass = () => {
    console.log('hello');
  };
  render() {
    return (
      <HashRouter>
        <React.Fragment>
          <Header />
          <NavBar />
          <div ClassName="content">
            <Route
              exact
              path="/"
              component={Slideshow}
              setFilterBass={this.setFilterBass}
              filterGuitar={this.setFilterGuitar}
              filterDrums={this.setFilterDrums}
            />
            <Route exact path="/Shelf" component={Shelf} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Contact" component={Contact} />
          </div>
          <Footer />
          {/* <GithubCorner />
        <main>
          <Filter />
          <Shelf />
        </main>
        <FloatCart /> */}
        </React.Fragment>
      </HashRouter>
    );
  }
}

export default App;
