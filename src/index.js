/**
	authors hcj
	version 1.0
*/
import React, { Component } from 'react';
import './css/index.css';
import './css/App.css';
import Header from './components/header';
import SpaceInfo from './components/spaceInfo.js';

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <SpaceInfo></SpaceInfo>
      </div>
    );
  }
}

module.exports = App;
