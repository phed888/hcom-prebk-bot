import React, { Component } from 'react';
import C3Chat from './C3Chat';

class C3Body extends Component {
  render() {
    const spreadList = this.props.conversation.map(message => (
      <li className="messageBubble">
        <C3Chat
          avatar=""
          agent={message.agent}
          photo={message.photo}
          message={message.message}
          buttons=""
        />
      </li>
    ));
    return (
      <div className="c3body">
        <ul className="chat-messages">{spreadList}</ul>
      </div>
    );
  }
}

export default C3Body;
