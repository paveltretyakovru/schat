import React, {Component} from 'react';

class RoomsShowChatMessagesComponent extends Component{
  render() {
    return(
      <div>
        {
          this.props.messages.map(message => {
            let classNames = `message-wrapper ${message.me ? 'me' : 'them'}`;
            
            return(
              <div key={message.id} className={classNames}>
                <div className="text-wrapper animated fadeIn">
                  {message.message}
                </div>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default RoomsShowChatMessagesComponent;