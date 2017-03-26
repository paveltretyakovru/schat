import React, {Component} from 'react';

class RoomsShowChatMessagesComponent extends Component{
  render() {
    return(
      <div>
        <div className="message-wrapper them">
          <div className="text-wrapper animated fadeIn">Or maybe just give it a like!</div>
        </div>

        <div className="message-wrapper me">
          <div className="text-wrapper animated fadeIn">test</div>
        </div>
      </div>
    );
  }
}

export default RoomsShowChatMessagesComponent;