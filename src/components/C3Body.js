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
        {/* <C3Chat agent="" photo="" message={this.props.firstMessage} />
        <C3Chat
          agent="false"
          photo="pool-photo"
          message={[
            <div>
              "Here's what Pier 2620 Hotel Fisherman's Warf, San Francisco says
              about the pool:"
              <ul>
                <li>
                  <strong>Roof-top pool and sundeck</strong>
                </li>
              </ul>
            </div>
          ]}
        /> */}
      </div>
    );
  }
}

export default C3Body;
