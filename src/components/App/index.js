import React, { Component } from 'react';

import Shelf from '../Shelf';
import Header from '../Header/header.js';
import NavBar from '../NavBar';
import Slideshow from '../Slideshow';
import Footer from '../Footer';
import { Route, HashRouter, NavLink, Redirect } from 'react-router-dom';
import About from '../About';
import Contact from '../Contact';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { filter: 'none', search: false };
    this.setFilterApp = this.setFilterApp.bind(this);
  }

  setFilterApp = filter => {
    console.log('console: selected filter in App is' + filter);
    this.setState({
      filter: filter,
      search: true
    });
  };
  render() {
    const { search } = this.state;
    return (
      <HashRouter>
        <React.Fragment>
          <Header />
          <NavBar />
          <div className="content">
            <Route
              exact
              path="/"
              component={() => <Slideshow setFilterApp={this.setFilterApp} />}
            />
            {!search && (
              <Route
                exact
                path="/Shelf"
                render={props => (
                  <Shelf {...props} filter={this.state.filter} />
                )}
              />
            )}
            {search && (
              <Route
                exact
                path="/Shelf"
                render={props => (
                  <Shelf {...props} filter={this.state.filter} />
                )}
              />
            )}
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
