import React, { Component } from 'react';
import SearchButton from './SearchButton.js';

class SearchAmenities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: {
        avatar: '',
        agent: true,
        photo: '',
        message: '',
        buttons: ''
      }
    };
  }

  // initiated by clicking on the 'search' button or hitting enter
  submitString = event => {
    event.preventDefault();
    // conditional to prevent search without a search term
    if (this.state.inputText.message !== '') {
      this.props.pageInput(this.state.inputText);
    }
    // delete the text from the search box
    this.setState({ inputText: { message: '' } });
  };

  // updates the state as the customer types
  updateInput = event => {
    this.setState({ inputText: { message: event.target.value } });
  };

  render() {
    return (
      <form className={this.props.className} onSubmit={this.submitString}>
        <label htmlFor="amenity-search">Search amenities</label>
        <div className="search-container">
          <input
            type="text"
            onChange={this.updateInput}
            value={this.state.inputText.message}
            placeholder={this.props.placeHolder}
          />
          <SearchButton />
        </div>
      </form>
    );
  }
}

export default SearchAmenities;
