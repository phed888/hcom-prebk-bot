import React, { Component } from 'react';
import HCOMHeader from '../chrome/HCOMHeader';
import ButtonInvisible from '../ButtonInvisible';
import SearchAmenities from '../SearchAmenities';
import C3Component from '../C3Component';

class HotelPier2620 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      c3visible: false,
      c3docked: false,
      conversation: []
    };
  }

  // Display the search question and its answer

  askQuestion = questionObject => {
    this.addToConversation(questionObject);
    this.answerQuestion(questionObject);
  };

  answerQuestion = questionObject => {
    setTimeout(() => {
      if (questionObject.message.includes('pool' || 'swimming' || 'wading')) {
        this.addToConversation({
          avatar: 'hotels',
          agent: true,
          photo: 'pool-photo',
          message: (
            <>
              <p style={{ margin: 0 }}>
                Here's what Hotel Pier 2660 Fisherman's Warf has to say about
                pool options:
              </p>
              <ul>
                <li style={{ padding: 0 }}>
                  <strong>Outdoor pool</strong>
                </li>
              </ul>
            </>
          ),
          buttons: []
        });
        this.addToConversation({
          avatar: 'hotels',
          agent: true,
          photo: '',
          message: 'Can I help you with anything else?',
          buttons: ["Nope, that's it.", 'View amenities', 'Message agent']
        });
      } else {
        this.addToConversation({
          avatar: 'hotels',
          agent: true,
          photo: '',
          message: "Sorry, I don't understand. Ask me about the pool instead",
          buttons: []
        });
      }
    }, 1500);
  };

  addToConversation = message => {
    this.setState(
      {
        conversation: [...this.state.conversation, message]
      },
      this.showC3()
    );
  };

  // Control the appearance of the C3 component itself

  showC3 = () => {
    if (this.state.c3visible === false) {
      if (this.state.c3docked === true) {
        this.setState({ c3docked: false });
      }
      this.setState({ c3visible: true });
    }
  };

  closeC3 = () => {
    this.setState(prevState => ({
      c3visible: !prevState.c3visible
    }));
    // clear the conversation when you close c3
    this.setState(prevState => ({
      conversation: []
    }));
  };

  toggleDock = () => {
    this.setState(prevState => ({
      c3docked: !prevState.c3docked
    }));
  };

  render() {
    return (
      <div>
        <HCOMHeader />
        <div className="pier2620-pdp">
          <ButtonInvisible
            to="/search-results"
            class="button-invisible searchResults"
          />
          <SearchAmenities
            pageInput={this.askQuestion}
            className="searchAmenities pdp"
            placeHolder="Ask an amenities question"
          />
          <C3Component
            visibility={this.state.c3visible}
            dockedness={this.state.c3docked}
            toggleDock={this.toggleDock}
            c3Input={this.askQuestion}
            closeC3={this.closeC3}
            conversation={this.state.conversation}
            pageInput={this.askQuestion}
          />
        </div>
      </div>
    );
  }
}

export default HotelPier2620;
