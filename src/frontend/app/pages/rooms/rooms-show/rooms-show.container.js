// App libs
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

// actions
import * as AppActions from 'app/app.actions';
import * as RoomsActions from '../rooms.actions';
import * as HeaderActions from 'app/shared/header/header.actions';

import RoomsShowKeyFieldComponent from './shared/rooms-show-key-field.component';
import RoomsShowChatMessagesComponent from './shared/rooms-show-chat-messages.component';
import RoomsShowMessageFieldComponent from './shared/rooms-show-message-field.component';

import './rooms-show.container.css';

class RoomsShowContainer extends Component {
  static path = '/rooms/:id'

  componentWillMount() {
    this.props.setHeaderButtons(null, null);
  }

  render() {
    let roomId = this.props.params.id;

    return(
      <div className="animated fadeInLeft row center-xs" id="rooms-show-wrapper">
        <div className="col-xs-11"  id="rooms-show-container">
          <div id="rooms-show-key-field-container">
            <RoomsShowKeyFieldComponent roomId={roomId} />
          </div>

          <div id="rooms-show-messages-container">
            <RoomsShowChatMessagesComponent
              messages={this.props.rooms.messages}
            />
          </div>

          <div id="rooms-show-message-text-field">
            <RoomsShowMessageFieldComponent />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    rooms: state.rooms,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    appActions: bindActionCreators(AppActions, dispatch),
    roomsActions: bindActionCreators(RoomsActions, dispatch),
    headerActions: bindActionCreators(HeaderActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomsShowContainer);
