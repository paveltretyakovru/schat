import Mousetrap from 'mousetrap';
import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

import './rooms-show-message-field.component.css'

class RoomsShowMessageFieldComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
    }
  }

  componentDidMount() {
    let sendMessageTextFieldElement = document.querySelector('.message-field__container');

    Mousetrap(sendMessageTextFieldElement).bind(
      ['enter'], this.handleSendMessage.bind(this)
    );
  }

  componentWillUnmount() {
    // 'ctrl+enter', 'command+enter'
    let sendMessageTextFieldElement = document.querySelector('.message-field__container');
    Mousetrap(sendMessageTextFieldElement).unbind(['enter']);
  }

  render() {
    return(
      <div className="message-field__container">
        <div className="message-field__container-fixed">
          <TextField
            value={this.state.message}
            hintText="Write message..."
            fullWidth={true}
            multiLine={true}
            onChange={this.handleChangeTextField.bind(this)}
            className="message-field__input animated slideInUp"
          />
        </div>
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