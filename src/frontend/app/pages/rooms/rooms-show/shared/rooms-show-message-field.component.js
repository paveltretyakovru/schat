import React, { Component } from 'react';

import TextField from 'material-ui/TextField';
import {pinkA200} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import ContentSend from 'material-ui/svg-icons/content/send';

const containerStyle = {
  display: 'flex',
}

const styles = {
  smallIcon: {
    width: 36,
    height: 36,
  },
  mediumIcon: {
    width: 48,
    height: 48,
  },
  largeIcon: {
    width: 60,
    height: 60,
  },
  small: {
    width: 72,
    height: 72,
    padding: 16,
  },
  medium: {
    width: 96,
    height: 96,
    padding: 24,
  },
  large: {
    width: 120,
    height: 120,
    padding: 30,
  },
};

class RoomsShowMessageFieldComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
    }
  }

  render() {
    return(
      <div style={containerStyle}>
        <TextField
          rowsMax={5}
          fullWidth={true}
          hintText="Message..."
          multiLine={true}
          onChange={this.handleChangeTextField.bind(this)}
        />
        <IconButton
          style={styles.small}
          onTouchTap={() => this.props.handleAddMessage(this.state.message)}
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
}

export default RoomsShowMessageFieldComponent;