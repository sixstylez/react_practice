import React, { Component } from 'react';

import Shelf from '../Shelf';
import Header from '../Header/header.js';
import NavBar from '../NavBar';
import Slideshow from '../Slideshow';
import Footer from '../Footer';
import { Route, HashRouter } from 'react-router-dom';
import About from '../About';
import Contact from '../Contact';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.setFilter = this.setFilter.bind(this);
  }

  setFilter = filter => {
    console.log('console: selected filter is' + filter);
  };
  render() {
    return (
      <HashRouter>
        <React.Fragment>
          <Header />
          <NavBar />
          <div className="content">
            <Route
              exact
              path="/"
              component={Slideshow}
              setFilter={this.setFilter}
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
