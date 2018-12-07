import React, { Component } from 'react';
import C3Body from './C3Body';
import SearchAmenities from './SearchAmenities';

class C3Component extends Component {
  closeC3 = event => {
    event.preventDefault();
    this.props.closeC3();
  };

  toggleDock = event => {
    event.preventDefault();
    this.props.toggleDock();
  };

  render() {
    return (
      <div
        className={`c3container ${this.props.visibility ? 'is-visible' : ''} ${
          this.props.dockedness && this.props.visibility ? 'is-docked' : ''
        }`}
      >
        <div className="c3header">
          <div className="c3title">Chat with us</div>
          {/* <div className="c3more" onClick={this.toggleDock} /> */}
          <div className="c3close" onClick={this.closeC3}>
          <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M9 18A9 9 0 1 1 9 0a9 9 0 0 1 0 18zm1.414-9l3.536-3.536a1 1 0 1 0-1.414-1.414L9 7.586 5.464 4.05A1 1 0 0 0 4.05 5.464L7.586 9 4.05 12.536a1 1 0 0 0 1.414 1.414L9 10.414l3.536 3.536a1 1 0 0 0 1.414-1.414L10.414 9z" fill="#ffffff" fill-rule="nonzero"/></svg>
          </div>
        </div>
        <C3Body conversation={this.props.conversation} />
        <div className="c3footer">
          <SearchAmenities
            pageInput={this.props.pageInput}
            className="searchAmenities"
            placeHolder="Type message"
          />
        </div>
      </div>
    );
  }
}

export default C3Component;
