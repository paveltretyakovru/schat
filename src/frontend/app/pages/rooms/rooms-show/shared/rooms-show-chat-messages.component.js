import $ from 'jquery';
import AES from 'crypto-js/aes';
import CryptoJS from 'crypto-js';
import scrollDown from 'scroll-down';
import React, {Component} from 'react';

class RoomsShowChatMessagesComponent extends Component{
  componentDidUpdate() {
    scrollDown($('#rooms-show-messages-container'));
  }

  render() {
    return(
      <div>
        {
          this.props.messages.map(message => {
            let classNames = `message-wrapper ${message.me ? 'me' : 'them'}`;
            let bytes = AES.decrypt(message.message, this.props.room.controlKey);
            let plaintext = bytes.toString(CryptoJS.enc.Utf8);

            console.log('MESSAGES PLAIN', message.message || null, this.props.room.controlKey || null, plaintext || null);

            return(
              <div key={message.id} className={classNames}>
                <div className="text-wrapper animated fadeIn">
                  {plaintext || 'Invalid secret key'}
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