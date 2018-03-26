import $ from 'jquery';
import AES from 'crypto-js/aes';
import CryptoJS from 'crypto-js';
import scrollDown from 'scroll-down';
import React, {Component} from 'react';

import './rooms-show-chat-messages.component.css'

class RoomsShowChatMessagesComponent extends Component{
  componentDidUpdate() {
    scrollDown($('.rooms-show-messages__container'));
  }

  render() {
    let { room } = this.props;

    return(
      <div className="rooms-show-messages__container">
        {
          this.props.messages.map(message => {
            let classNames = `message-wrapper ${message.me ? 'me' : 'them'}`;

            {/* Decoding message*/}
            try {
              if(!room.key) throw new Error();
              let bytes = AES.decrypt(message.message, room.key);
              var plaintext = bytes.toString(CryptoJS.enc.Utf8);

              console.log('Plain text', plaintext)
            } catch(e) {
              plaintext = '';
            }

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