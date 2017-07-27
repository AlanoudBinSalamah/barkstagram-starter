import React, { Component } from 'react';
import Image from './Image'


class ImageContainer extends Component {
  renderImages(arr) {
    return arr.map((el, index) => {
      return (
        <div
          key={index}
          onMouseOver={ () => {this.props.updateDisplay(index)} }
          onDoubleClick={ ()=> {this.props.addLikedImage(el.title)}}
        >
          <Image  source={el.source} title={el.title}/>
        </div>
      )
    })
  }

  render() {
    return (
      <div id="image-cont">
        {this.renderImages(this.props.images)}
      </div>
    );
  }
}

export default ImageContainer;
