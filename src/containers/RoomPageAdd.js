import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

// STYLE SHEET
import '../styles/roomAddPage.css';

export default class RoomPageAdd extends Component {
  render() {
    return(<div className="row center-xs">
      <div className="col-md-6 col-xs-6">
        <TextField
          hintText="Room title"
          fullWidth={ true }
          floatingLabelText="Room title"
        />
        <TextField
          hintText="Room ID"
          fullWidth={ true }
          floatingLabelText="Room ID"
        />
        <div id="room-add-form-buttons">
          <FlatButton label="Random" />          
          <FlatButton label="Done" primary={true} />
          <FlatButton label="Cancel" secondary={true} />
        </div>
      </div>
    </div>);
  }
}