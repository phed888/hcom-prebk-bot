import React, { Component } from 'react';

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
      </div>
    );
  }
}

export default C3Chat;
