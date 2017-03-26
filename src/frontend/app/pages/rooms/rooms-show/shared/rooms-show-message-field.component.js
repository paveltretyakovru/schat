import Mousetrap from 'mousetrap';
import React, { Component } from 'react';

import TextField from 'material-ui/TextField';
import {pinkA200} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import ContentSend from 'material-ui/svg-icons/content/send';

const containerStyle = {
  display: 'flex',
}

const styles = {
  smallIcon: { width: 36, height: 36 },
  mediumIcon: { width: 48, height: 48 },
  largeIcon: { width: 60, height: 60 },
  small: { width: 72, height: 72, padding: 16 },
  medium: { width: 96, height: 96, padding: 24 },
  large: { width: 120, height: 120, padding: 30 },
};

class RoomsShowMessageFieldComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
    }
  }

  componentDidMount() {
    let element = document.getElementById('send-message-text-field');

    Mousetrap(element).bind(
      ['ctrl+enter', 'command+enter'], this.handleSendMessage.bind(this)
    );
  }

  componentWillUnmount() {
    let element = document.getElementById('send-message-text-field');
    Mousetrap(element).unbind(['ctrl+enter', 'command+enter']);
  }

  render() {
    return(
      <div style={containerStyle}>
        <TextField
          id="send-message-text-field"
          value={this.state.message}
          rowsMax={5}
          fullWidth={true}
          hintText="Message..."
          multiLine={true}
          onChange={this.handleChangeTextField.bind(this)}
        />
        <IconButton
          id="send-message-button"
          style={styles.small}
          onTouchTap={this.handleSendMessage.bind(this)}
          iconStyle={{...styles.smallIcon, color: pinkA200}}
        >
          <ContentSend />
        </IconButton>
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
    this.props.handleAddMessage(this.state.message);
    this.setState({...this.state, message: ''});
  }
}

export default RoomsShowMessageFieldComponent;