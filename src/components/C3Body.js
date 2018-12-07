import React, { Component } from 'react';
import C3Chat from './C3Chat';
import C3HeaderHcom from './C3HeaderHcom';

class C3Body extends Component {
  scrollToBottom() {
    document
      .getElementById('scrollTarget')
      .scrollIntoView({ behavior: 'smooth' });
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  render() {
    const spreadList = this.props.conversation.map((message, index) => (
      <li className="messageBubble" key={index}>
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
        <C3HeaderHcom />
        <ul className="chat-messages">{spreadList}</ul>
        <div id="scrollTarget">&nbsp;</div>
      </div>
    );
  }
}

export default C3Body;
