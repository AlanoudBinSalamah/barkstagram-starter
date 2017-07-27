import React, { Component } from 'react';


class Image extends Component {
  render() {
    return (
      <div className="pic-cont">
        <img className="pic" alt="" src={this.props.source}/>
        <p > {this.props.title} </p>
      </div>
    );
  }
}

export default Image;
