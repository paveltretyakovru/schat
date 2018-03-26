import Mousetrap from 'mousetrap';
import React, { Component } from 'react';

class RoomsShowMessageFieldComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
    }
  }

  componentDidMount() {
    let sendMessageTextFieldElement = document.getElementById('send-message-text-field');

    Mousetrap(sendMessageTextFieldElement).bind(
      ['ctrl+enter', 'command+enter'], this.handleSendMessage.bind(this)
    );
  }

  componentWillUnmount() {
    let sendMessageTextFieldElement = document.getElementById('send-message-text-field');
    Mousetrap(sendMessageTextFieldElement).unbind(['ctrl+enter', 'command+enter']);
  }

  render() {
    return(
      <div>
        Message input container
      </div>
    );
  }

  handleChangeTextField(e, newValue) {
    this.setState({
      ...this.state,
      message: newValue,
    })
  }

  handleSendMessage() {
    this.props.sendMessageHandler(this.state.message, this.props.room)
      .then((res) => {
        console.log('sendMessage the promise', { res })

        if(res.data.success) {
          const {message, roomId} = res.data.data
          this.props.addMessageHandler({message, roomId});
        }

        this.setState({...this.state, message: ''})
      })
  }
}

export default RoomsShowMessageFieldComponent;