import React, { Component } from 'react';
import HCOMHeader from '../chrome/HCOMHeader';
import ButtonInvisible from '../ButtonInvisible';
import SearchAmenities from '../SearchAmenities';

class HotelMarriott extends Component {
  render() {
    return (
      <div>
        <HCOMHeader />
        <div className="marriott-pdp">
          <ButtonInvisible
            to="/search-results"
            class="button-invisible searchResults"
          />
          <SearchAmenities />
        </div>
      </div>
    );
  }
}

export default HotelMarriott;
