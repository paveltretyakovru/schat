// App libs
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';


// actions
import * as AppActions from 'app/app.actions';
import * as RoomsActions from '../rooms.actions';
import * as HeaderActions from 'app/shared/header/header.actions';

import ButtonFavorComponent from '../../../shared/buttons/button-favor.component';
import RoomsShowKeyFieldComponent from './shared/rooms-show-key-field.component';
import RoomsShowChatMessagesComponent from './shared/rooms-show-chat-messages.component';
import RoomsShowMessageFieldComponent from './shared/rooms-show-message-field.component';

import './rooms-show.container.css';

class RoomsShowContainer extends Component {
  static path = '/rooms/:id'
  
  componentWillMount() {
    const room = this.getRoom()
    this.props.roomsActions.setCurrentRoom(room)

    this.props.setHeaderButtons(
      null,
      <ButtonFavorComponent
        active={room.roomData.favor}
        handleClick={() => {
          this.props.roomsActions.toogleRoomFavor(room.roomId)
          return room.roomData.favor
        }} 
      />
    );
    this.props.headerActions.updateHeaderTitle(
      <div className="rooms-show__header-title-wrapper">
        <span
          onTouchTap={ this.props.roomsActions.routeToRoomSettings.bind(this, room.roomId) }
          className="rooms-show__header-title"
        >{room.roomData.title}
        </span>
      </div>
    );
  }

  // TODO: componentUnmounted -> remove controlKey | fixed

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
      <div className="rooms-show__container">
        <div className="animated fadeInLeft row center-xs" id="rooms-show-wrapper">
          <div className="col-xs-10"  id="rooms-show-container">
            <div id="rooms-show-key-field-container">
              <RoomsShowKeyFieldComponent
                room={roomData || null}
                roomId={roomId}
                handleUpdateKey={this.props.roomsActions.updateKey}
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
                room={roomData}
                addMessageHandler={this.props.roomsActions.addMessage}
                sendMessageHandler={this.props.sendMessage}
              />
            </div>
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
    sendMessage: RoomsActions.sendMessage,
    roomsActions: bindActionCreators(RoomsActions, dispatch),
    headerActions: bindActionCreators(HeaderActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomsShowContainer);
