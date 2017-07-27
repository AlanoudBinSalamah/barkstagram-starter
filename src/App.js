import React, { Component } from 'react';
import './App.css';

// import Nav from './components/Nav';
import ImageContainer from './components/ImageContainer';
import LikedPics from './components/LikedPics';
import Display from './components/Display';
import PupData from './data/coolPics.js';



class App extends Component {
  constructor() {
    super();
    this.state = {
      favorite: false,
      images: PupData,
      displayedImage: PupData[0].source,
      likedImages: []
    };
  }

  updateDisplay(pupIndex) {
    console.log('updating!');
    this.setState({
      displayedImage: this.state.images[pupIndex].source,
    });
  }

  addLikedImage(pupTitle) {
    console.log('pushing new liked image: ' + pupTitle)
    let newLiked = this.state.likedImages.concat([pupTitle])
    this.setState({
      likedImages: newLiked
    })
    console.log('state updated to: ' + this.state.likedImages)
  }

  toggleFavorite() {
    if (this.state.favorite === false) {
      console.log('favorited!')
      this.setState({
        favorite: true
      })
    } else {
      console.log('unfavorited!')
      this.setState({
        favorite: false
      })
    }
  }

  render() {
    return (
      <div className="App">
        <div id="favorite-btn" onClick={()=> {this.toggleFavorite()}}>favorite this page!</div>
        <p> Favorited? <span id="fav-status"> {this.state.favorite.toString()} </span> </p>
        <Display picSource={this.state.displayedImage}/>
        <LikedPics likedPics={this.state.likedImages} />
        <ImageContainer images={this.state.images} updateDisplay={this.updateDisplay.bind(this)} addLikedImage={this.addLikedImage.bind(this)}/>
      </div>
    );
  }
}

export default App;
