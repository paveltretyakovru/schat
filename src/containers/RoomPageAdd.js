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
    this.props.appActions.updateHeaderTitle('Add new crypted chat');
    this.props.appActions.updateHeaderLeftIcon('close');
  }

  render() {
    return(<div className="row center-xs animated fadeInLeft">
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
        <TextField
          hintText="Room Key"
          fullWidth={ true }
          floatingLabelText="Room Key"
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