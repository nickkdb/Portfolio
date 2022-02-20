import React, { Component } from 'react';
import Header from "./components/header";
import StickyNav from "./components/stickyNav";
import Application from './pages/Application';
import $ from 'jquery';

class App extends Component {

  render() {
    return (
        <>
          <Header />
          <StickyNav />
          <Application />
        </>
    );
  }
}

export default App;
