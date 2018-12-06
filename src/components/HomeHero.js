import React, { Component } from 'react';
import ButtonPrimary from './ButtonPrimary';

class HomeHero extends Component {
  render() {
    return (
      <div className="hero-image">
        <div className="page-sizing">
          <div className="search-box">
            <ButtonPrimary buttonName="Search" to="/search-results" />
          </div>
        </div>
      </div>
    );
  }
}

export default HomeHero;
