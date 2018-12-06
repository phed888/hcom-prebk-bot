import React, { Component } from 'react';
import ButtonInvisible from './ButtonInvisible';

class SearchResultsBody extends Component {
  render() {
    return (
      <div className="search-results-body">
        <ButtonInvisible
          to="/pier2620hotel"
          class="button-invisible pier2620Hotel"
        />
        <ButtonInvisible
          to="/marriotthotel"
          class="button-invisible marriottHotel"
        />
      </div>
    );
  }
}

export default SearchResultsBody;
