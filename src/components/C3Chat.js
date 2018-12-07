import React, { Component } from 'react';
import moment from 'moment';

class C3Chat extends Component {
  render() {
    return (
      <div
        className={this.props.agent ? 'chat-container agent' : 'chat-container'}
      >
        <div className="chat-avatar" />
        <div
          className={
            this.props.photo ? 'chat-photo ' + this.props.photo : 'chat-photo '
          }
        />
        <div className="chat-message">{this.props.message}</div>
        <ul className="chat-buttons" />
        <div className="name-date">
          <div className="message-name"> </div>
          <div className="message-date">{moment().calendar()}</div>
        </div>
      </div>
    );
  }
}

export default C3Chat;
