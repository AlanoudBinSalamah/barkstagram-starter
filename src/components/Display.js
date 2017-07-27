import React, { Component } from 'react';


class Display extends Component {
  render() {
    return (
      <img id="display" src={this.props.picSource} alt=""/>
    );
  }
}

export default Display;
