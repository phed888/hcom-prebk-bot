import React, { Component } from 'react';
import moment from 'moment';

class C3Chat extends Component {
  buttonArray = () => {
    if (this.props.buttons) {
      const buttons = this.props.buttons.map((button, index) => (
        <li className="chat-button" key={index} onClick={this.quickReply}>
          {button.title}
        </li>
      ));
      return buttons;
    }
  };

  quickReply = event => {
    // event.preventDefault;
    console.log('clicked');
  };
  render() {
    return (
      <div className="chat-all">
        <div
          className={
            this.props.agent ? 'chat-container agent' : 'chat-container'
          }
        >
          <div className="chat-avatar" />
          <div
            className={
              this.props.photo ? 'chat-photo ' + this.props.photo : 'chat-photo'
            }
          />
          <div className="chat-message">{this.props.message}</div>
          <div className="name-date">
            <div className="message-name"> </div>
            <div className="message-date">{moment().calendar()}</div>
          </div>
        </div>
        <ul className="chat-buttons">{this.buttonArray()}</ul>
      </div>
    );
  }
}

export default C3Chat;
