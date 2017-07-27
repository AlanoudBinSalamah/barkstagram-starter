import React, { Component } from 'react';


class LikedPics extends Component {
  renderLiked(arr) {
    return arr.map((el, index) => {
      return <span key={index}> {el},  </span>
    })
  }

  render() {
    return (
      <div id="likedpics">
        <p> LikedPics </p>
        {this.renderLiked(this.props.likedPics)}
      </div>
    );
  }
}

export default LikedPics;
