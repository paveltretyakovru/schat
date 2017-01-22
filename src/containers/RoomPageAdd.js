import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

// Actions
import * as appActions from '../actions/app';

// STYLE SHEET
import '../styles/roomAddPage.css';

class RoomPageAdd extends Component {
  componentWillMount() {
    this.props.appActions.updateHeaderTitle('Add new room');
    this.props.appActions.updateHeaderLeftIcon('close');
    this.props.appActions.updateHeaderRightIcon('save');
  }

  render() {
    return(<div className="row center-xs animated fadeInLeft">
      <div className="col-md-4 col-xs-11">
        <TextField
          hintText="Room title"
          fullWidth={ true }
          floatingLabelText="Room title for your rooms list"
        />
        <TextField
          hintText="Room ID"
          fullWidth={ true }
          floatingLabelText="Room ID for generating room link"
        />
        <TextField
          hintText="Room Key"
          fullWidth={ true }
          floatingLabelText="Room Key to encrypt your messages"
        />
        <div id="room-add-form-buttons">
          <FlatButton primary={true} label="Generate random data" />
        </div>
      </div>
    </div>);
  }
}

function mapStateToProps(state) {
  return {
    app: state.app,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    appActions: bindActionCreators(appActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomPageAdd);