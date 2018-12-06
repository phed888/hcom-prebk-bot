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

  askQuestion = searchString => {
    this.addToConversation(searchString);
    this.answerQuestion(searchString);
  };

  answerQuestion = searchString => {
    setTimeout(() => {
      if (searchString.includes('pool' || 'swimming' || 'wading')) {
        this.addToConversation('Yes, there is a pool!');
      } else {
        this.addToConversation(
          "Sorry, I don't understand. Ask me about the pool instead"
        );
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
          <SearchAmenities pageInput={this.askQuestion} />
          <C3Component
            visibility={this.state.c3visible}
            dockedness={this.state.c3docked}
            toggleDock={this.toggleDock}
            c3Input={this.askQuestion}
            closeC3={this.closeC3}
            conversation={this.state.conversation}
          />
        </div>
      </div>
    );
  }
}

export default HotelPier2620;
