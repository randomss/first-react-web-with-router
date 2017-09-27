
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Header from './components/headerComponent/header'
import HomePage from './components/homePage'
import ProductPage from './components/productPage'


import './App.css';
import './Assets/css/default.min.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/product" component={ProductPage} />

          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>

        </div>
      </Router>
    );
  }
}

export default App;
