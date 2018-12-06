import React, { Component } from 'react';
import HCOMHeader from '../chrome/HCOMHeader';
import SearchResultsBody from '../SearchResultsBody';

class HCOMSearchResults extends Component {
  render() {
    return (
      <div>
        <HCOMHeader />
        <SearchResultsBody />
      </div>
    );
  }
}

export default HCOMSearchResults;
