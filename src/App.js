import React, { Component } from 'react';
import './App.css';

// import Nav from './components/Nav';
import ImageContainer from './components/ImageContainer';
import LikedPics from './components/LikedPics';
import Display from './components/Display';
import PupData from './data/coolPics.js';
import Nav from './components/Nav';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <Display/>
        <LikedPics/>
        <ImageContainer/>
      </div>
    );
  }
}

export default App;
