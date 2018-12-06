import React, { Component } from 'react';
import C3Body from './C3Body';
import C3HeaderHcom from './C3HeaderHcom';

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
          <div className="c3title">How can I help?</div>
          <div className="c3more" onClick={this.toggleDock} />
          <div className="c3close" onClick={this.closeC3} />
        </div>
        <C3HeaderHcom />
        <C3Body conversation={this.props.conversation} />
        <div className="c3footer">
          <form className="typeMessage">
            <input
              type="text"
              className="messageInput"
              placeholder="Type message"
            />
            <button className="messageSubmit">Send</button>
          </form>
        </div>
      </div>
    );
  }
}

export default C3Component;
