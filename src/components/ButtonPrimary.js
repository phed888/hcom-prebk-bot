import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ButtonPrimary extends Component {
  render() {
    return (
      <Link to={this.props.to}>
        <div className="button-primary">{this.props.buttonName}</div>
      </Link>
    );
  }
}

export default ButtonPrimary;
