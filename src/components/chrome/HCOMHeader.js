import React, { Component } from 'react';
import HCOMLogo from './HCOMLogo';

class HCOMHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      globalNav: ['USD', 'Help', 'Your bookings', 'Create account', 'Sign in'],
      subNav: [
        'Hotel deals',
        'Packages',
        'Groups',
        'Gift cards',
        'List your property',
        'Help'
      ]
    };
  }

  render() {
    return (
      <div className="hcom-header">
        <div className="global-header">
          <ul className="global-nav2">
            <HCOMLogo />
            <div className="language-currency" />
            <div className="global-rightside" />
          </ul>
        </div>
        <div className="sub-header">
          <ul className="sub-nav2">
            <div className="nav-list">
              {this.state.subNav.map(function(name) {
                return <li className="subNav-listItem">{name}</li>;
              })}
            </div>
            <div className="subNav-rightSide" />
          </ul>
        </div>
      </div>
    );
  }
}

export default HCOMHeader;
