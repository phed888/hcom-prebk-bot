import React, { Component } from 'react';
import HCOMHeader from '../chrome/HCOMHeader';
import HomeHero from '../HomeHero';

class HCOMHome extends Component {
  render() {
    return (
      <div>
        <HCOMHeader />
        <HomeHero />
        <div className="homepage-ads" />
      </div>
    );
  }
}

export default HCOMHome;
