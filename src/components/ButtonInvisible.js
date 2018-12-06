import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ButtonInvisible extends Component {
  render() {
    return (
      <Link to={this.props.to}>
        <div className={this.props.class} />
      </Link>
    );
  }
}

export default ButtonInvisible;
