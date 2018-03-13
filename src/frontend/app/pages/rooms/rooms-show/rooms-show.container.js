// App libs
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

// actions
import * as AppActions from 'app/app.actions';
import * as RoomsActions from '../rooms.actions';
import * as HeaderActions from 'app/shared/header/header.actions';

import ButtonNavigateRoomsList from '../../../shared/buttons/button-navigate-rooms-list.component';
import RoomsShowKeyFieldComponent from './shared/rooms-show-key-field.component';
import RoomsShowChatMessagesComponent from './shared/rooms-show-chat-messages.component';
import RoomsShowMessageFieldComponent from './shared/rooms-show-message-field.component';

import './rooms-show.container.css';

class RoomsShowContainer extends Component {
  static path = '/rooms/:id'

  componentWillMount() {
    const { roomData } = this.getRoom();

    this.props.setHeaderButtons(null, <ButtonNavigateRoomsList />);
    this.props.headerActions.updateHeaderTitle(`EC. ${roomData.title}`);
  }

  // TODO: componentUnmounted -> remove controlKey

  render() {
    const { roomId, roomData } = this.getRoom();

    if(!roomData) {
      return(
        <div className="row">
          <div className="col-xs-11">
            404. The chat was not founded.
          </div>
        </div>
      );
    }

    return(
      <div className="animated fadeInLeft row center-xs" id="rooms-show-wrapper">
        <div className="col-xs-11"  id="rooms-show-container">
          <div id="rooms-show-key-field-container">
            <RoomsShowKeyFieldComponent
              room={roomData || null}
              roomId={roomId}
              handleUpdateControlKey={this.props.roomsActions.updateControlKey}
            />
          </div>

          <div id="rooms-show-messages-container">
            <RoomsShowChatMessagesComponent
              room={roomData || null}
              roomId={roomId}
              messages={roomData.messages || null}
            />
          </div>

          <div id="rooms-show-message-text-field">
            <RoomsShowMessageFieldComponent
              roomId={roomId}
              handleAddMessage={this.props.roomsActions.addMessage}
            />
          </div>
        </div>
      </div>
    );
  }

  getRoom() {
    return {
      roomId: this.props.params.id || false,
      roomData: this.props.rooms.list.find(element => {
        return element.id === this.props.params.id;
      }),
    }
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
