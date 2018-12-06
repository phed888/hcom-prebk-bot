import React, { Component } from 'react';
import SearchButton from './SearchButton.js';

class SearchAmenities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: null
    };
  }

  submitString = event => {
    event.preventDefault();
    this.props.pageInput(this.state.inputText);
    this.setState({ inputText: '' });
  };

  updateInput = event => {
    this.setState({ inputText: event.target.value });
  };

  render() {
    return (
      <form className="searchAmenities" onSubmit={this.submitString}>
        <label htmlFor="amenity-search">Search amenities</label>
        <div className="search-container">
          <input
            type="text"
            onChange={this.updateInput}
            value={this.state.inputText}
          />
          <SearchButton />
        </div>
      </form>
    );
  }
}

export default SearchAmenities;
