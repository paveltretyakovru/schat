import AES from 'crypto-js/aes'
import CryptoJS from 'crypto-js'
import React, {Component} from 'react'

import './rooms-show-chat-messages.component.css'

class RoomsShowChatMessagesComponent extends Component{
  componentDidUpdate() {
    window.scrollTo(0,document.body.scrollHeight);
  }

  render() {
    let { room } = this.props;

    return(
      <div className="rooms-show-messages__container">
        {
          this.props.messages.map(message => {
            let plaintext = ''
            let classNames = `message-wrapper ${message.me ? 'me' : 'them'}`;

            {/* Decoding message*/}
            try {
              if(!room.key) throw new Error('Chat room key is undefined');
              let bytes = AES.decrypt(message.message, room.key)
              plaintext = bytes.toString(CryptoJS.enc.Utf8)
            } catch(e) {
              plaintext = '';
              console.error('Decoding message exception.', e.message)
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